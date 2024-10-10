<template>
    <div>
        <CourseHeader :max-level="courseStore.maxLevel" :current-level="currentLevel" />
        <div class="flex flex-col max-w-[1200px] mx-auto p-4">

            <div v-if="status === 'pending'" v-for="i in 3" class="mb-6" :key="i">
                <Skeleton class="w-full h-40 mb-5" />
                <div class="flex gap-2">
                    <Skeleton class="w-full h-4 mb-5" />
                    <Skeleton class="w-full h-4" />
                </div>
                <Skeleton class="w-20 h-9" />
            </div>
            <div v-else>
                <div class="p-2" v-for="task in course" :key="task.id">
                    <TaskRenderer :task="task" @submit="handleSubmit(task.id, $event)" />
                </div>
                <Button variant="outline" @click="nextLevel">Next Level</Button>
                <MonacoEditor class="min-h-[400px]" v-model="value" lang="typescript" />
            </div>



        </div>
    </div>
</template>

<script setup lang="ts">
const courseStore = useCourseStore();
const currentLevel = computed(() => courseStore.currentLevel);
const value = ref('');

export interface Task {
    id: number;
    type: string;
    title?: string;
    description?: string;
    options?: { id: string; value: string; label: string }[] | string[];
    md?: string;
}

console.log('Fetching data...');

const { data: course, status, error, } = await useLazyAsyncData<Task[]>('course', () =>
    new Promise(resolve => {
        setTimeout(() => {
            resolve([
                {
                    id: 1,
                    type: 'input',
                    title: 'Введение в Python',
                    description: 'Python - это высокоуровневый язык программирования...'
                },
                {
                    id: 1,
                    type: "radio",
                    title: "asdsad",
                    options: [
                        { id: "test1", value: "tasdasd", label: "Тест 1" },
                        { id: "test2", value: "asdsad", label: "тест 2 " },
                        { id: "test3", value: "asdasd", label: "тест 3" },
                    ]
                },
                {
                    id: 6,
                    type: "codeBlock",
                    md: `
            # Привет, я заголовок MD разметки.
            \`\`\` vue
            <TestComponent />
            <p> Test </p>
\`\`\`
`
                }
            ]);
        }, 10000);
    })
);



function handleSubmit(taskId: number, response: any) {
    console.log(`Task ${taskId} response:`, response);
    courseStore.saveResponse(taskId, response);
}

function nextLevel() {
    courseStore.nextLevel();
}
</script>