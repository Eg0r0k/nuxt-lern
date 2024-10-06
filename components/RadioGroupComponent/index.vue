<template>
    <RadioGroup v-model="selectedOption">
        <div v-for="option in options" :key="option.id" class="flex items-center space-x-2">
            <RadioGroupItem :id="option.id" :value="option.value" />
            <Label :for="option.id">{{ option.label }}</Label>
        </div>
    </RadioGroup>
</template>

<script setup lang="ts">



const props = defineProps<{ options: { id: string; value: string; label: string }[] }>();
const emit = defineEmits(['update:modelValue']);

const selectedOption = ref<string>('');

watch(selectedOption, (newVal) => {
    emit('update:modelValue', newVal);
});

</script>