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
    <div class="form-input form-message">
        <label :for="id">{{ label }}</label>
        <textarea v-model="model" :name="name" :id="id"> </textarea>
    </div>
</template>