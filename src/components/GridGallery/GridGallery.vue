
<script setup>
    import { ref, reactive, computed } from 'vue';
    import { DialogGallery } from '../AppDialog';

    const cap = 5;

    const props = defineProps({
        images: {
            type: Array,
            default: () => [],
        },
    });

    const index = ref(0);
    const open = ref(false);
    const cache = reactive({});

    const openGallery = (i) => {
        index.value = i;
        open.value = true;
    };

    const grid = computed(() => props.images.slice(0, cap));
</script>

<template>
    <div
        class="cb-product-gallery"
        :class="`cb-product-gallery-size__${grid.length}`"
    >
        <div>
            <div
                v-if="images?.length === 0"
                class="cb-product-gallery__noimage"
            />
            <template v-else>
                <div
                    v-for="(image, i) in grid"
                    :key="image.url"
                    class="cb-product-gallery__cell"
                    :class="`cb-product-gallery__index__${i + 1}`"
                    tabindex="0"
                    :style="{
                        ...(image.lqip ? { '--lqip-url': `url(${image.lqip})` } : {}),
                        '--image-url': cache[image.url] ? `url(${cache[image.url]})` : 'none',
                    }"
                    @click="openGallery(i)"
                    @keydown.enter="openGallery(i)"
                >
                    <div class="cb-product-gallery__blur">
                        <div />
                    </div>
                    <img
                        :loading="i === 0 && !image.lqip ? 'eager' : 'lazy'"
                        :src="image.url"
                        :alt="image.description"
                        :class="{ 'loaded': cache[image.url] }"
                        @load="cache[image.url] = image.url"
                    >
                </div>
                <dialog-gallery
                    v-model="open"
                    v-model:index="index"
                    :images="images"
                />
            </template>
            <slot />
        </div>
    </div>
</template>

<style src="./gridGallery.css" scoped></style>