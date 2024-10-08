<template>
    <div class="flex w-full space-x-4 text-sm">
        <div class="flex w-full flex-col items-center">
            <p>Уровень</p>
            <p>{{ level }}</p>
        </div>
        <Separator orientation="vertical" />
        <div class="flex w-full flex-col items-center">
            <p>Сертификаты</p>
            <p>{{ certificates }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
interface Props {
    level: number;
    certificates: number;
}
const props = defineProps<Props>()
</script>