<template>
    <div class="flex items-center w-full p-4  border-b text-card-foreground shadow ">
        <nav class="flex gap-2 mr-auto flex-wrap">
            <Button v-for="i in maxLevel" :key="i" :variant="i == currentLevel + 1 ? 'default' : 'outline'">{{
                i
            }}</Button>
        </nav>
    </div>
    <div class=" relative w-full h-0.5 bg-neutral-200 overflow-hidden">
        <div class=" absolute bg-blue-500 left-0 h-full transition-all duration-500 ease-in-out"
            :style="{ width: progressPercentage + '%' }"></div>
    </div>
</template>

<script setup lang="ts">
interface Props {
    maxLevel: number;
    currentLevel: number;

}
const props = defineProps<Props>()
const progressPercentage = computed(() => {
    if (props.maxLevel === 0) return 0;
    return ((props.currentLevel + 1) / props.maxLevel) * 100;
});

</script>
