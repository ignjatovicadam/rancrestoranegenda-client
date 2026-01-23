<script setup>
    import { reactive, ref } from 'vue';
    import { z } from 'zod';
    import { InputText, InputEmail, InputTextArea } from '@/components';

    const form = reactive({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        bookingDate: '',
        bookingType: '',
        message: '',
    });

    const schema = z.object({
        firstName: z.string().min(1, 'Ime je obavezno'),
        email: z.string().email('Neispravna email adresa'),
        phoneNumber: z.string().min(1, 'Broj telefona je obavezan'),
        bookingDate: z.string().min(1, 'Datum rezervacije je obavezan'),
        bookingType: z.string().min(1, 'Vrsta proslave je obavezna'),
    });

    const errors = ref({});

    const hiddenField = ref('');

    const success = ref(false);

    const networkError = ref(false);

    const loading = ref(false);

    const onFormSubmit = async () => {
        if (hiddenField.value) {
            return;
        }

        const result = schema.safeParse(form);

        if (!result.success) {
            errors.value = z.treeifyError(result.error);
            return;
        }

        loading.value = true;

        errors.value = {};

        try {
            const res = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form),
            });

            if (!res.ok) {
                throw new Error('Network response was not ok');
            };

            success.value = true;
            loading.value = false;
            Object.keys(form).forEach(k => form[k] = '');
            setTimeout(() => {
            success.value = false;
            }, 5000);

        } catch (err) {
            networkError.value = true;
            loading.value = false;
            setTimeout(() => {
                networkError.value = false;
            }, 10000);
        }
    };
</script>

<template>
    <div>
        <transition>
            <div v-if="success" class="success-message" style="margin-top: 2em">
                Rezervacija je poslata. Kontaktiraćemo vas uskoro.
            </div>

        </transition>
        <transition>
            <div v-if="networkError" class="error-message" style="margin-top: 2em">
                Rezervacija nije poslata. Molimo pokušajte ponovo kasnije.
            </div>
        </transition>
        <div class="form" style="margin-top: 2em">
            <div :class="['form-group', { 'error': errors?.properties?.firstName}]">
                <input-text v-model="form.firstName" name="firstName" id="firstName" label="Ime" />
                <div v-if="errors?.properties?.firstName" class="error-notice"><span>{{ errors.properties.firstName.errors[0] }}</span></div>
            </div>
            <div class="form-group">
                <input-text v-model="form.lastName" name="lastName" id="lastName" label="Prezime" />
                <input v-model="hiddenField" type="text" name="age" id="age" class="input-age" autocomplete="off" tabindex="-1" />
            </div>
            <div :class="['form-group', { 'error': errors?.properties?.phoneNumber}]">
                <input-text v-model="form.phoneNumber" name="phoneNumber" id="phoneNumber" label="Broj telefona" />
                <div v-if="errors?.properties?.phoneNumber" class="error-notice"><span>{{ errors.properties.phoneNumber.errors[0] }}</span></div>
            </div>
            <div :class="['form-group', { 'error': errors?.properties?.email}]">
                <input-email v-model="form.email" name="email" id="email" label="E-mail" />
                <div v-if="errors?.properties?.email" class="error-notice"><span>{{ errors.properties.email.errors[0] }}</span></div>
            </div>
            <div :class="['form-group', { 'error': errors?.properties?.bookingDate}]">
                <input-text v-model="form.bookingDate" name="bookingDate" id="bookingDate" label="Datum proslave" />
                <div v-if="errors?.properties?.bookingDate" class="error-notice"><span>{{ errors.properties.bookingDate.errors[0] }}</span></div>
            </div>
            <div :class="['form-group', { 'error': errors?.properties?.bookingType}]">
                <input-text v-model="form.bookingType" name="bookingType" id="bookingType" label="Vrsta proslave" />
                <div v-if="errors?.properties?.bookingType" class="error-notice"><span>{{ errors.properties.bookingType.errors[0] }}</span></div>
            </div>
            <div class="form-group span-3">
                <input-text-area v-model="form.message" name="message" id="message" label="Poruka" />
            </div>
            <div class="form-group">
                <button class="button button-primary" style="max-width: 150px;" @click="onFormSubmit">
                    <div v-if="loading" class="spinner-border text-light" role="status" style="width: 1rem; height: 1rem;">
                        <span class="visually-hidden">Sačekajte...</span>
                    </div>
                    <span v-else>Rezervišite</span>
                </button>
            </div>
        </div>
    </div>
</template>

<style src="./booking-form.css" scoped></style>