<script setup>
    defineProps({
        imageUrl: {
            type: String,
            required: true,
        },
        size: {
            type: String,
            default: 'small',
            validator: (value) => ['small', 'medium', 'large'].includes(value),
        }
    });
</script>

<template>
    <section :class="['hero', size]" :style="{ 'background-image': `url(${imageUrl})`}">
        <div class="container">
            <slot></slot>
        </div>
    </section>
</template>

<style src="./app-hero.css" scoped></style>