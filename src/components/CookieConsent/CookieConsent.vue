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

<style src="./cookie-consent.css" scoped />