<script setup>
    defineProps({
        open: {
            type: Boolean,
            default: false,
        }
    });

    const enter = (element) => {
        const { width } = getComputedStyle(element);
        element.style.width = width;
        element.style.position = 'absolute';
        element.style.visibility = 'hidden';
        element.style.height = 'auto';

        const { height } = getComputedStyle(element);
        element.style.width = null;
        element.style.position = null;
        element.style.visibility = null;
        element.style.height = 0;

        getComputedStyle(element).height;

        requestAnimationFrame(() => {
            element.style.height = height;
        });
    };

    const afterEnter = (element) => {
        element.style.height = 'auto';
    };

    const leave = (element) => {
        const { height } = getComputedStyle(element);
        element.style.height = height;

        getComputedStyle(element).height;

        requestAnimationFrame(() => {
            element.style.height = 0;
        });
    };
</script>

<template>
    <transition
        name="expand"
        @enter="enter"
        @after-enter="afterEnter"
        @leave="leave"
    >
        <div v-show="open" class="accordion-panel">
            <div>
                <span>
                    <slot />
                </span>
            </div>
        </div>
    </transition>
</template>

<style src="./accordion-panel.css" scoped></style>