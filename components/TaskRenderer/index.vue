<template>
    <div>
        <h3 class=" font-mono">{{ task.title }}</h3>
        <p class="mb-3">{{ task.description }}</p>
        <component :is="inputComponent" v-model="userResponse" v-bind="task.options ? { options: task.options } : {}"
            @update:modelValue="handleModelValueUpdate" :value="task.md" />
        <Button v-if="task.type != 'seporator'" class="mt-2" @click="submitAnswer">Submit</Button>
        <MDCRenderer v-if="task.type === 'codeBlock'" :body="ast!.body" :data="ast!.data" />
       

    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import CheckboxComponent from '../CheckboxComponent/index.vue';
import RadioGroupComponent from '../RadioGroupComponent/index.vue';
import Input from '../ui/input/Input.vue';
import Select from '../ui/select/Select.vue';

import Separator from '../ui/separator/Separator.vue';
import type { Task } from '../Course/index.vue';
import MDC from '@nuxtjs/mdc/runtime/components/MDC.vue';
import type { MDCParserResult } from '@nuxtjs/mdc';




function handleModelValueUpdate(newValue: any) {
    userResponse.value = newValue;
}
const props = defineProps<{ task: Task }>();
const userResponse = ref<string | string[]>(
    props.task.type === 'input' || props.task.type === 'radio' ? '' : []
);
let ast = ref<MDCParserResult | null>(null);

if (props.task.type === 'codeBlock') {
    const { data } = await useAsyncData('markdown', () => parseMarkdown(props.task.md || ''));
    ast.value = data;
}
const inputComponent = computed(() => {
    switch (props.task.type) {
        case 'input':
            return Input;
        case 'checkbox':
            return CheckboxComponent;
        case 'radio':
            return RadioGroupComponent;
        case 'select':
            return Select;
        case 'seporator':
            return Separator
        case 'codeBlock':
            return MDC
        default:
            return 'div';
    }
});

function submitAnswer() {
    console.debug('Submitted:', userResponse.value);

}
</script>