<template>
    <div class="h-full py-4">
        <h2 class="font-bold text-xl mb-4">Доступные проекты:</h2>
        <div class="flex space-y-4 flex-col">
            <Skeleton class="h-[125px] w-full rounded-xl" v-for="i in projectCount" :key="i" />
        </div>
    </div>
</template>

<script setup lang="ts">
interface Props {
    projectCount: number;
}
const props = defineProps<Props>();
</script>