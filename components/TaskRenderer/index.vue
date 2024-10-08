<template>
    <div>
        <h3 class="">{{ task.title }}</h3>
        <p class="">{{ task.description }}</p>
        <component :is="inputComponent" v-model="userResponse" v-bind="task.options ? { options: task.options } : {}"
            @update:modelValue="handleModelValueUpdate" />
        <Button v-if="task.type != 'seporator'" class="mt-2" @click="submitAnswer">Submit</Button>
        <!-- <MDCRenderer v-if="task.type === 'codeBlock'" :body="ast!.body" :data="ast!.data" /> -->
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
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
    const { data } = await useAsyncData<MDCParserResult>('markdown', () => parseMarkdown(props.task.md || ''));
    ast.value = data.value || null;
}

const inputComponent = computed(() => {
    switch (props.task.type) {
        case 'input':
            return defineAsyncComponent(() => import('../ui/input/Input.vue'));
        case 'checkbox':
            return defineAsyncComponent(() => import('../CheckboxComponent/index.vue'));
        case 'radio':
            return defineAsyncComponent(() => import('../RadioGroupComponent/index.vue'));
        case 'select':
            return defineAsyncComponent(() => import('../ui/select/Select.vue'));
        case 'seporator':
            return defineAsyncComponent(() => import('../ui/separator/Separator.vue'));
        case 'codeBlock':
            return MDC
        default:
            return 'div';
    }
});

function submitAnswer() {
    if (userResponse.value) {
        console.debug('Submitted:', userResponse.value);
    } else {
        console.warn('Response is empty!');
    }
}

</script>