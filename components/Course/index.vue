<template>
    <CourseHeader :max-level="courseStore.maxLevel" :current-level="currentLevel" />
    <div class="flex flex-col  max-w-[1200px] mx-auto p-4">
        <div class="p-2" v-for="task in pythonCourse" :key="task.id">
            <TaskRenderer :task="task" @submit="handleSubmit(task.id, $event)" />
        </div>
        <Button variant="outline" @click="nextLevel">Next Level</button>
    </div>
    <MonacoEditor class="min-h-[400px]" v-model="value" lang="typescript" />
</template>

<script setup lang="ts">

const courseStore = useCourseStore();
const currentLevel = computed(() => courseStore.currentLevel);

const value = ref('')
export interface Task {
    id: number;
    type: string;
    title?: string;
    description?: string;
    options?: { id: string; value: string; label: string }[] | string[];
    md?: string;
}


const pythonCourse: Task[] = [
    {
        id: 1,
        type: 'input',
        title: 'Введение в Python',
        description: 'Python - это высокоуровневый язык программирования, известный своей простотой и читаемостью кода. В этом курсе мы рассмотрим основы Python.'
    },

    {
        id: 6,
        type: "codeBlock",
        md: `
# Привет, я заголовок MD разметки.
 У меня нету пока что стилизованных компонентов, но во мне можно рендерить 
 блоки кода как например тут:
\`\`\` vue  [index.vue] {1} additional meta data
<TestComponent />
<p> Test </p>
<style lang="scss">
.test{
    display:flex;
}
</style>
\`\`\`
`
    }
];
function handleSubmit(taskId: number, response: any) {
    console.log(`Task ${taskId} response:`, response);
    courseStore.saveResponse(taskId, response);
}

function nextLevel() {
    courseStore.nextLevel();
}
</script>