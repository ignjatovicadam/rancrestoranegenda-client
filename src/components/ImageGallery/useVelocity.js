import { ref } from 'vue';

export function useVelocity(maxTime) {
    const velocity = ref(0);
    const timings = new Map();

    const purge = () => {
        const now = Date.now();

        for (const [time] of [...timings]) {
            if (time >= (now - maxTime)) {
                continue;
            }

            timings.delete(time);
        }
    };

    const update = () => {
        const now = Date.now();

        const ms = [...timings.keys()];
        const xs = [...timings.values()];

        const min = Math.min(...xs);
        const max = Math.max(...xs);

        const diff = Math.abs(max - min);
        const time = now - Math.min(...ms);

        velocity.value = diff / (time || 1);
    };

    const track = (x) => {
        const ms = Date.now();
        timings.set(ms, x);

        purge();
        update();
    };

    const untrack = () => {
        velocity.value = 0;
        timings.clear();
    };

    return {
        velocity,
        track,
        untrack,
    };
}