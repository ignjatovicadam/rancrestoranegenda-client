<script setup>
    import { onMounted, ref } from 'vue';

    const open = ref(false);
    const googleAl = ref(true);

    const save = () => {
        const consent = {
            googleAnalytics: googleAl.value
        };

        localStorage.setItem('cookieConsent', JSON.stringify(consent));
        open.value = false;
    };

    const validate = () => {
        const consent = localStorage.getItem('cookieConsent');

        if (consent) {
            const parsedConsent = JSON.parse(consent);
            googleAl.value = parsedConsent.googleAnalytics;
            return false;
        }

        return true;
    };

    onMounted(() => {
        open.value = validate();
    });
</script>

<template>
    <Transition name="cookie-slide">
        <div v-if="open" class="cookie-consent padding-block-500">
            <div class="large-container">
                <div class="two-cl-layout">
                    <div>
                        <h3 class="fs-tertiary-heading fw-bold mb-1">Cenimo vašu privatnost</h3>
                        <span class="fw-regular fs-small mb-2">Koristimo kolačiće da bismo poboljšali vaše iskustvo pregledanja, pružili personalizovane oglase ili sadržaje i analizirali naš saobraćaj.<router-link to="/privacypolicy">Politika privatnosti</router-link></span>
                        <div class="toggle-group">
                            <label class="toggle-label fw-semi-bold fs-small">
                                <input v-model="googleAl" type="checkbox" class="toggle-input" />
                                <span class="toggle-switch fw-bold"></span>
                                <span>Analitički kolačići</span>
                            </label>
                        </div>
                    </div>

                    <div>
                        <button @click="save" class="button button-primary">Sačuvajte</button>
                    </div>
                </div>
            </div>
        </div>
    </Transition>
</template>

<style scoped>
.cookie-consent {
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 1000;
    background-color: white;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
}

.fs-small {
    font-size: 0.875rem;
}

.two-cl-layout {
    display: flex;
    flex-direction: column;
    gap: var(--size-400);
}

@media (min-width: 50em) {
    .two-cl-layout {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
}

.mb-1 {
    margin-bottom: var(--size-200);
}

.toggle-group {
    margin-top: 1em;
}

.toggle-label {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    cursor: pointer;
}

.toggle-input {
    display: none;
}

.toggle-switch {
    position: relative;
    width: 44px;
    height: 24px;
    background-color: #ccc;
    border-radius: 999px;
    transition: background-color 0.3s ease;
}

.toggle-switch::after {
    content: "";
    position: absolute;
    top: 3px;
    left: 3px;
    width: 18px;
    height: 18px;
    background-color: #fff;
    border-radius: 50%;
    transition: transform 0.3s ease;
}

.toggle-input:checked + .toggle-switch {
    background-color: var(--clr-accent-400);
}

.toggle-input:checked + .toggle-switch::after {
    transform: translateX(20px);
}

.cookie-slide-enter-from,
.cookie-slide-leave-to {
  opacity: 0;
}

.cookie-slide-enter-active,
.cookie-slide-leave-active {
  transition: opacity 1s ease;
}

.cookie-slide-enter-to,
.cookie-slide-leave-from {
  opacity: 1;
}
</style>