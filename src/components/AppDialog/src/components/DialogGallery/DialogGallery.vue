<script setup>
    import { computed, ref } from 'vue';
    import { X } from 'lucide-vue-next';
    import { DialogBase } from '../DialogBase';
    import { ImageGallery } from '../../../../ImageGallery';

    defineOptions({ inheritAttrs: false });

    const props = defineProps({
        modelValue: {
            type: Boolean,
            default: false,
        },
        locked: {
            type: Boolean,
            default: false,
        },
        closeButtonText: {
            type: String,
            required: true,
        },
        index: {
            type: Number,
            default: 0,
        },
        images: {
            type: Array,
            default: () => [],
        },
    });

    const emit = defineEmits(['update:modelValue', 'closed', 'update:index']);

    const model = computed({
        get: () => props.modelValue,
        set: (val) => emit('update:modelValue', val),
    });

    const index = computed({
        get: () => props.index,
        set: (val) => emit('update:index', val),
    });

    const delay = 400;

    const shake = ref(false);

    const blocked = () => {
        shake.value = true;

        setTimeout(() => {
            shake.value = false;
        }, 300);
    };
</script>

<template>
    <teleport to="body">
        <dialog-base
            v-model="model"
            v-bind="$attrs"
            :locked="locked"
            :delay="delay"
            @closed="emit('closed')"
            @blocked="blocked"
        >
            <div :class="['dialog__gallery', { 'dialog--shake' : shake }]">
                <div class="dialog__close">
                    <button @click.prevent.stop="model = false">
                        <span
                            class="cb--icon"
                            aria-hidden="true"
                        >
                            <X />
                        </span>
                        <span class="cb--text">
                            Zatvori
                        </span>
                    </button>
                </div>

                <div
                    v-if="images.length > 0"
                    class="dialog__wrapper"
                >
                    <image-gallery
                        v-model:index="index"
                        :images="images"
                        autofocus
                    >
                        <template #default="{ index: i }">
                            <span class="vgo-gallery__index">{{ i + 1 }} / {{ images.length }}</span>
                            <div
                                v-if="images[i].name || images[i].copy || images[i].description"
                                class="vgo-gallery__meta"
                            >
                                <p
                                    v-if="images[i].name || images[i].copy"
                                    class="vgo-gallery__meta-name-copy"
                                >
                                    <span
                                        v-if="images[i].name"
                                        class="vgo-gallery__meta-name"
                                    >{{ images[i].name }}</span>
                                    <span
                                        v-if="images[i].copy"
                                        class="vgo-gallery__meta-copy"
                                    >&copy; {{ images[i].copy }}</span>
                                </p>
                                <p
                                    v-if="images[i].description"
                                    class="vgo-gallery__meta-desc"
                                >
                                    {{ images[i].description }}
                                </p>
                            </div>
                        </template>
                    </image-gallery>
                </div>
                <slot />
            </div>
        </dialog-base>
    </teleport>
</template>

<style src="./dialog-gallery.css" scoped></style>