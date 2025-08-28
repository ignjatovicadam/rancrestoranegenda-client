<script setup>
    import { ref, reactive, watch } from 'vue';
    import { useSwipe } from './useSwipe';

    const props = defineProps({
        index: {
            type: Number,
            default: 0,
        },
        images: {
            type: Array,
            default: () => [],
        },
    });

    const emit = defineEmits(['update:index']);

    const viewport = ref(null);
    const cells = ref([]);
    const cache = reactive({});

    const { state, set } = useSwipe(viewport, cells);

    const clamp = (n) => Math.max(0, Math.min(n, props.images.length - 1));

    const next = () => set(clamp(state.index + 1));
    const previous = () => set(clamp(state.index - 1));

    const keyboardEvents = {
        'ArrowRight': next,
        'ArrowLeft': previous,
        'Home': () => set(0),
        'End': () => set(props.images.length - 1),
    };

    const handleKeyboard = (event) => {
        const action = keyboardEvents[event.key];

        if (!action) {
            return;
        }

        event.preventDefault();
        action();
    };

    watch(() => props.index, set, { immediate: true });
    watch(() => state.index, (index) => emit('update:index', index), { immediate: true });
</script>

<template>
    <div
        class="vgo-gallery"
        tabindex="0"
        :class="{ 'vgo-gallery__grabable': images.length > 1, 'vgo-gallery__grabbing': state.swiping }"
        @keydown.stop.self="handleKeyboard"
    >
        <div class="vgo-gallery__wrapper">
            <div
                v-if="images.length > 0"
                ref="viewport"
                class="vgo-gallery__viewport"
            >
                <div
                    v-for="(image, i) in images"
                    :key="image.url"
                    ref="cells"
                    class="vgo-gallery__cell"
                >
                    <div
                        class="vgo-gallery__cell-blur"
                        :style="{ 'background-image': cache[image.url] ? `url(${cache[image.url]})` : 'none' }"
                        role="img"
                    />
                    <img
                        :loading="i === 0 ? 'eager' : 'lazy'"
                        :src="image.url"
                        :alt="image.description"
                        @load="cache[image.url] = image.url"
                        @dragstart.prevent
                    >
                </div>
            </div>
            <div
                v-else
                class="vgo-gallery__cell-noimage"
            />
            <template v-if="images.length > 1">
                <a
                    class="vgo-gallery__previous"
                    :class="{ 'hidden': state.index === 0 || state.zooming }"
                    :tabindex="state.index === 0 ? -1 : 0"
                    href="javascript:void(0)"
                    @click="previous"
                >
                    <span class="cb-icon-aws cb-icon-aws--strong cb--chevron-left" />
                </a>
                <a
                    class="vgo-gallery__next"
                    :class="{ 'hidden': (state.index === images.length - 1) || state.zooming }"
                    :tabindex="state.index === images.length - 1 ? -1 : 0"
                    href="javascript:void(0)"
                    @click="next"
                >
                    <span class="cb-icon-aws cb-icon-aws--strong cb--chevron-right" />
                </a>
                <ol
                    class="vgo-gallery__pager"
                    :class="{ 'hidden': state.zooming }"
                >
                    <li
                        v-for="(image, i) in images"
                        :key="image.url"
                        :class="{ 'selected': state.index === i }"
                        @click="set(i)"
                    />
                </ol>
            </template>
            <slot :index="state.index" />
        </div>
    </div>
</template>

<style scoped src="./imageGallery.css" />