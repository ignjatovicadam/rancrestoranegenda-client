<script setup>
    import { reactive, ref } from 'vue';
    import { z } from 'zod';
    import { InputText } from '../InputText';
    import { InputEmail } from '../InputEmail';
    import { InputCombobox } from '../InputCombobox';
    import { InputTextArea } from '../InputTextArea';

    const form = reactive({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        bookingDate: '',
        bookingType: { label: 'Option 1', value: 'option1' },
        message: '',
    });

    const schema = z.object({
        firstName: z.string().min(1, 'First name is required'),
        email: z.email('Invalid email address'),
        phoneNumber: z.string().min(1, 'Phone number is required'),
        bookingDate: z.string().min(1, 'Booking date is required'),
    });

    const errors = ref({});

    const options = [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' },
    ];

    const onFormSubmit = () => {
        const result = schema.safeParse(form);

        if (!result.success) {
            errors.value = z.treeifyError(result.error)
        }
    };
</script>

<template>
    <div class="form" style="margin-top: 2em">
        <div :class="['form-group', { 'error': errors?.properties?.firstName}]">
            <input-text v-model="form.firstName" name="firstName" id="firstName" label="Name" />
            <div v-if="errors?.properties?.firstName" class="error-notice"><span>{{ errors.properties.firstName.errors[0] }}</span></div>
        </div>
        <div class="form-group">
            <input-text v-model="form.lastName" name="lastName" id="lastName" label="Last name" />
        </div>
        <div :class="['form-group', { 'error': errors?.properties?.phoneNumber}]">
            <input-text v-model="form.phoneNumber" name="phoneNumber" id="phoneNumber" label="Phone number" />
            <div v-if="errors?.properties?.phoneNumber" class="error-notice"><span>{{ errors.properties.phoneNumber.errors[0] }}</span></div>
        </div>
        <div :class="['form-group', { 'error': errors?.properties?.email}]">
            <input-email v-model="form.email" name="email" id="email" label="Email" />
            <div v-if="errors?.properties?.email" class="error-notice"><span>{{ errors.properties.email.errors[0] }}</span></div>
        </div>
        <div :class="['form-group', { 'error': errors?.properties?.bookingDate}]">
            <input-text v-model="form.bookingDate" name="bookingDate" id="bookingDate" label="Booking date" />
            <div v-if="errors?.properties?.bookingDate" class="error-notice"><span>{{ errors.properties.bookingDate.errors[0] }}</span></div>
        </div>
        <div class="form-group">
            <input-combobox v-model="form.bookingType" name="bookingType" id="bookingType" label="Booking type" placeholder="Select type" :options="options"/>
        </div>
        <div class="form-group span-2">
            <input-text-area v-model="form.message" name="message" id="message" label="Message" />
        </div>
        <div class="form-group">
            <button class="button button-primary" @click="onFormSubmit">Send</button>
        </div>
    </div>
</template>