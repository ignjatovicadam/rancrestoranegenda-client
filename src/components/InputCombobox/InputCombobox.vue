<script setup>
    import { computed, ref } from 'vue';

    const props = defineProps({
        modelValue: {
            type: Object,
            default: () => ({}),
        },
        options: {
            type: Array,
            default: () => [],
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
        },
        placeholder: {
            type: String,
            default: '',
        }
    });

    const emit = defineEmits(['update:modelValue']);

    const model = computed({
        get: () => props.modelValue,
        set: (val) => emit('update:modelValue', val),
    });

    const open = ref(false);

    const selected = computed(() => {
        if (model.value.value) {
            return true;
        }

        return false;
    });

    const select = (option) => {
        model.value = option;
        open.value = false;
    };
</script>

<template>
    <div 
        :class="['form-input custom-select', { 'open': open }]" 
        tabindex="0"
        @focusout="open = false"
    >
        <label :for="id">{{ label }}</label>
        <div class="select-display" @click="open = !open">
            <span v-if="selected">{{ model.value }}</span>
            <span v-else>{{ placeholder }}</span>
        </div>
        <ul class="select-options">
            <li 
                v-for="option in options" 
                :key="option.value"
                @click="select(option)"
                :class="{ selected: option.value === model.value }"
            >
                {{ option.label }}
            </li>
        </ul>
    </div>
</template>

<style scoped>
.select-display:hover {
    cursor: pointer;
}
</style>