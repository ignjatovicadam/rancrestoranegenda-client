<script setup>
    import { computed } from 'vue';

    const props = defineProps({
        modelValue: {
            type: String,
            default: '',
        },
        name: {
            type: String,
            default: '',
        },
        id: {
            type: String,
            default: '',
        },
        label: {
            type: String,
            default: '',
        }
    });

    const emit = defineEmits(['update:modelValue']);

    const model = computed({
        get: () => props.modelValue,
        set: (val) => emit('update:modelValue', val),
    });
</script>

<template>
    <div class="form-input">
        <label :for="id">{{ label }}</label>
        <input v-model="model" type="email" :name="name" :id="id">
    </div>
</template>