<script setup>
    import { onMounted, ref, computed, watch } from 'vue';

    const props = defineProps({
        modelValue: {
            type: Boolean,
            default: false,
        },
        locked: {
            type: Boolean,
            default: false,
        },
        delay: {
            type: Number,
            default: 0,
        },
    });

    const emit = defineEmits(['update:modelValue', 'blocked', 'closed']);

    let timeout;
    const dialog = ref(null);

    const model = computed({
        get: () => props.modelValue,
        set: (val) => emit('update:modelValue', val),
    });

    const click = (e) => { if (e.target === dialog.value) close(); };

    const open = () => {
        model.value = true;

        if (dialog.value.open) return;

        dialog.value.showModal();
        dialog.value.classList.add('cb-dialog--enter');
        dialog.value.classList.remove('cb-dialog--leave');

        delayed(() => {
            dialog.value.classList.remove('cb-dialog--enter');
        });
    };

    const close = () => {
        if (props.locked) {
            model.value = true;
            emit('blocked');
            return;
        }

        model.value = false;
        dialog.value.classList.add('cb-dialog--leave');
        dialog.value.classList.remove('cb-dialog--enter');

        delayed(() => {
            dialog.value?.classList.remove('cb-dialog--leave');
            dialog.value?.close();
            emit('closed');
        });
    };

    const cancel = (event) => {
        event.preventDefault();
        close();
    };

    const delayed = (callback) => {
        clearTimeout(timeout);
        timeout = setTimeout(callback, props.delay);
    };

    const setRootStyles = () => {
        const existing = document.querySelector('style[cb-dialog]');

        if (existing) {
            return;
        }

        const headTag = document.getElementsByTagName('head')[0];
        const styleTag = document.createElement('style');
        styleTag.setAttribute('cb-dialog', '');

        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

        styleTag.innerHTML = `
            :root {
                --vg-scrollbar-width: ${scrollbarWidth}px;
            }
        `;

        headTag.appendChild(styleTag);
    };

    watch(() => props.modelValue, value => value ? open() : close());

    onMounted(() => {
        setRootStyles();

        if (model.value) {
            dialog.value.showModal();
        }
    });
</script>

<template>
    <dialog
        ref="dialog"
        class="cb-framework cb-dialog"
        @click.self.stop="click"
        @cancel="cancel"
    >
        <slot />
    </dialog>
</template>