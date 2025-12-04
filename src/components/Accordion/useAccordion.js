import { reactive, computed } from 'vue';

export const useAccordion = (mode = 'multiple') => {
    const state = reactive({
        single: null,
        multiple: {},
    });

    const active = computed(() => state[mode]);

    const toggle = (id) => {
        if (mode === 'single') state.single = id === state.single ? null : id;
        else if (mode === 'multiple') state.multiple[id] = !state.multiple[id];
    };

    return {
        active: active,
        toggle,
    };
};