<script setup>
    import { reactive, ref } from 'vue';
    import { z } from 'zod';
    import { InputText } from '../InputText';
    import { InputEmail } from '../InputEmail';
    import { InputTextArea } from '../InputTextArea';

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

            if (!res.ok) throw new Error('Failed');

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

<style scoped>
.success-message {
    background-color: #e6ffed;
    border: 1px solid #38c172;
    color: #1b5e20;
    padding: 1em;
    margin-bottom: 1em;
    border-radius: 4px;
    font-weight: 500;
    animation: fadeIn 0.3s ease-in-out;
}

.error-message {
    background-color: #ffe6e6;
    border: 1px solid #ff4d4d;
    color: #b71c1c;
    padding: 1em;
    margin-bottom: 1em;
    border-radius: 4px;
    font-weight: 500;
    animation: fadeIn 0.3s ease-in-out;
}

.v-enter-active,
.v-leave-active {
    transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(-6px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.spinner-border {
    border: 0.15em solid rgba(255, 255, 255, 0.25);
    border-top-color: #ffffff;
    border-radius: 50%;
    width: 1.5rem;
    height: 1.5rem;
    animation: spinner-border 0.75s linear infinite;
    display: inline-block;
    vertical-align: middle;
}

@keyframes spinner-border {
    to {
        transform: rotate(360deg);
    }
}

.button {
    min-width: 150px;
    align-items: center;
    justify-content: center;
}

.input-age {
    position: absolute;
    left: -9999px;
    width: 1px;
    height: 1px;
    overflow: hidden;
}
</style>