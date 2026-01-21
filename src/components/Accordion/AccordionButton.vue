<script setup>
    defineProps({
        open: {
            type: Boolean,
            default: false,
        }
    });
</script>

<template>
    <div :class="['accordion-button', { 'open': open }]" tabindex="0">
        <h3>
            <button class="accordion-button-toggle" :aria-expanded="open">
                <span class="fw-regular">
                    <slot />
                </span>

                <div>
                    <svg class="chev" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span class="visually-hidden">Otvorite</span>
                </div>
            </button>
        </h3>
    </div>
</template>

<style src="./accordion-button.css" scoped></style>