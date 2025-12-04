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

    const success = ref(false);

    const onFormSubmit = () => {
        const result = schema.safeParse(form);

        if (!result.success) {
            errors.value = z.treeifyError(result.error);
            return;
        }

        errors.value = {};
        success.value = true;

        setTimeout(() => {
            success.value = false;
            form.firstName = "";
            form.lastName = "";
            form.phoneNumber = "",
            form.email = "",
            form.bookingDate = "",
            form.bookingType = "";
            form.message = "";
        }, 3000);
    };
</script>

<template>
    <div>
        <transition>
            <div v-if="success" class="success-message" style="margin-top: 2em">
                Rezervacija je poslata. Kontaktiraćemo vas uskoro.
            </div>
        </transition>
        <div class="form" style="margin-top: 2em">
            <div :class="['form-group', { 'error': errors?.properties?.firstName}]">
                <input-text v-model="form.firstName" name="firstName" id="firstName" label="Ime" />
                <div v-if="errors?.properties?.firstName" class="error-notice"><span>{{ errors.properties.firstName.errors[0] }}</span></div>
            </div>
            <div class="form-group">
                <input-text v-model="form.lastName" name="lastName" id="lastName" label="Prezime" />
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
                <button class="button button-primary" @click="onFormSubmit">Rezervišite</button>
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
</style>