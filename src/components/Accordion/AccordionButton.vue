<script setup>
    defineProps({
        open: {
            type: Boolean,
            default: false,
        }
    });
</script>

<template>
    <div :class="['accordion-button', { 'open': open }]">
        <h3>
            <button class="accordion-button-toggle">
                <span class="fw-regular">
                    <slot />
                </span>

                <div>
                    <svg class="chev" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </button>
        </h3>
    </div>
</template>

<style scoped>
.accordion-button:hover {
    background-color: var(--clr-primary-100);
    cursor: pointer;
}

.accordion-button-toggle {
    all: unset;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 30px;
}

.accordion-button {
    padding: 1rem;
    border-left: 2px solid var(--clr-accent-400);
}

.accordion-button.open {
    background-color: #f8f8f8;
}

.chev {
    transition: transform 0.3s ease;
}

.open .chev {
    transform: rotate(180deg);
}

.toggle-cortainer {
    background-color: var(--clr-accent-400);
    height: 20px;
    width: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>