<template>
    <div class="min-h-screen flex items-center justify-center p-4">
        <div class="flex flex-col items-center">
            <h1 class="text-[100px]">{{ error.statusCode }} </h1>
            <p class=" text-muted-foreground mb-6">Простите, мы не нашли то что вы искали. Возможно, контент был удален
                или
                перенесен в другое место.</p>

            <Button as-child>
                <NuxtLink class=" flex items-center " to="/">
                    <Icon class="mr-2" name="fluent:chevron-left-12-regular" />
                    Вернуться обратно
                </NuxtLink>
            </Button>

        </div>
    </div>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app';
definePageMeta({
    title: 'Error'
})
const props = defineProps({
    error: Object as () => NuxtError
})
</script>
