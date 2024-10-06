<template>
    <div class="flex flex-col gap-2">
        <div v-for="(option, index) in options" :key="option.id" class="flex space-x-2.5">
            <Checkbox :id="option.id" :value="option.value" v-model="selectedValue[index]"
                @update:checked="handleUpdate(option.value, $event)" />
            <label :for="option.id" class="text-sm font-medium leading-none">
                {{ option.label }}
            </label>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{ options: { id: string; value: string; label: string }[] }>();
const emit = defineEmits(['update:modelValue']);

const selectedValue = ref<boolean[]>(Array(props.options.length).fill(false));

function handleUpdate(value: string, isChecked: boolean) {
    const index = props.options.findIndex(option => option.value === value);
    if (index !== -1) {
        selectedValue.value[index] = isChecked;
        const selectedValues = props.options.filter((option, i) => selectedValue.value[i]).map(option => option.value);
        emit('update:modelValue', selectedValues);
    }
}
</script>