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

<style scoped>
.hero {
    background-size: cover;
    background-position: center;
    color: var(--clr-primary-100);
    position: relative;
    display: flex;
    align-items: center;
    margin-top: 80px;
}

.hero::before {
    content: "";
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
}

:slotted(.hero .welcome-text) {
    max-width: 650px;
    position: relative;
    z-index: 1;
}

.hero.large {
    height: min(calc(100vh - 80px), 1000px);  
}

.hero.medium {
    min-height: 620px;
    max-height: 620px;
}
</style>