import { reactive, readonly, watch, onMounted } from 'vue';
import { useVelocity } from './useVelocity';

export function useSwipe(viewport, cells) {
    const settings = {
        edge: 20,
        minDistance: 0.5,
        minVelocity: 0.2,
        maxTrackTime: 200,
    };

    const state = reactive({
        initialized: false,
        index: 0,
        startX: 0,
        target: undefined,
        swiping: undefined,
        zooming: undefined,
        animation: undefined,
    });

    const hasTouchEvents = 'ontouchstart' in window;

    const { velocity, track, untrack } = useVelocity(settings.maxTrackTime);

    const clamp = (n, min, max) => Math.max(min, Math.min(n, max));

    const clampIndex = (n) => clamp(n, 0, cells.value.length - 1);

    const clampSwipe = (n) => clamp(n, -((cells.value.length * 100) - 100 + settings.edge), settings.edge);

    const getX = (e) => (hasTouchEvents && e instanceof TouchEvent ? e.changedTouches?.[0]?.clientX : e instanceof PointerEvent ? e.x : 0) ?? 0;

    const cancel = () => set(state.index);

    const set = (index) => {
        state.index = index;

        if (!state.initialized) {
            return;
        }

        state.target = -(state.index * 100);

        animate();
        reset();
    };

    const animate = () => {
        if (state.animation) {
            cancelAnimationFrame(state.animation);
            state.animation = undefined;
        }

        if (typeof state.target !== 'number') {
            return;
        }

        let percent = state.target;
        percent = +percent.toFixed(2);
        percent = clampSwipe(percent);

        state.animation = requestAnimationFrame(() => {
            viewport.value.style.transform = `translate3d(${percent}%, 0, 0)`;
            animate();
        });
    };

    const isPinching = (event) => {
        return hasTouchEvents && event instanceof TouchEvent && event.touches.length > 1;
    };

    const onVisualViewportResize = () => {
        state.zooming = (window.visualViewport?.scale ?? 1) > 1;
    };

    const initialize = () => {
        if (!hasTouchEvents) {
            document.addEventListener('pointerup', stop);
            document.addEventListener('pointermove', move);
        }

        if (viewport.value) {
            let percent = -(state.index * 100);
            percent = +percent.toFixed(2);
            percent = clampSwipe(percent);
            viewport.value.style.transform = `translate3d(${percent}%, 0, 0)`;
        }

        window.visualViewport?.addEventListener('resize', onVisualViewportResize);

        state.initialized = true;
    };

    const initializeCell = (element, index) => {
        element.style.left = `${index * 100}%`;

        if (hasTouchEvents) {
            element.ontouchstart = start;
            element.ontouchmove = move;
            element.ontouchend = stop;
            element.ontouchcancel = cancel;
        } else {
            element.onpointerdown = start;
            element.onpointermove = move;
            element.onpointerup = stop;
            element.onpointercancel = cancel;
        }
    };

    const start = (event) => {
        const element = event.currentTarget;

        if (state.zooming || isPinching(event)) {
            reset();
            return;
        }

        const x = getX(event);
        track(x);

        state.startX = x;
        state.target = -(state.index * 100);
        state.swiping = element;

        animate();
    };

    const move = (event) => {
        if (!state.swiping) {
            return;
        }

        if (state.zooming || isPinching(event)) {
            return;
        }

        event.stopPropagation();
        const x = getX(event);
        track(x);

        const delta = x - state.startX;
        const deltaPercent = (delta / state.swiping.clientWidth) * 100;
        state.target = ((state.index * 100) - deltaPercent) * -1;
    };

    const stop = (event) => {
        if (!state.swiping) {
            return;
        }

        event.stopPropagation();
        const x = getX(event);
        track(x);

        const delta = x - state.startX;
        const distance = Math.abs(delta);
        const minDistance = state.swiping.clientWidth * settings.minDistance;

        const direction = delta !== 0 ? delta < 0 ? 1 : -1 : 0;
        const units = Math.round(distance / state.swiping.clientWidth) || 1;
        const newIndex = clampIndex(state.index + (units * direction));

        const wouldChange = state.index !== newIndex;
        const isFarEnough = distance >= minDistance;
        const isFastEnough = velocity.value >= settings.minVelocity;

        if (wouldChange && (isFarEnough || isFastEnough)) {
            set(newIndex);
        } else {
            set(state.index);
        }
    };

    const reset = () => {
        state.startX = 0;
        state.target = undefined;
        state.swiping = undefined;
        state.animation = undefined;
        untrack();
    };

    watch(() => cells.value, () => {
        if (cells.value.length <= 1) {
            return;
        }

        for (const [index, element] of cells.value.entries()) {
            initializeCell(element, index);
        }
    }, { deep: true });

    onMounted(initialize);

    return {
        state: readonly(state),
        set: set,
    };
}