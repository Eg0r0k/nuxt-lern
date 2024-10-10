<template>
    <div class="h-full p-4 flex flex-col lg:flex-row">
        <aside class="flex flex-col lg:min-w-[350px] min-w-[250px]">
            <div class="flex items-center flex-col">
                <Avatar class="w-[100px] h-[100px]">
                    <AvatarImage src="https://github.com/radix-vue.png" alt="@radix-vue" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <h2 class=" font-medium text-2xl mb-4">{{ authStore.userName }}</h2>
                <div class="flex w-full space-x-4 text-sm">
                    <div class="flex w-full flex-col items-center">
                        <p>Уровень</p>
                        <p>9</p>
                    </div>
                    <Separator orientation="vertical" />
                    <div class="flex w-full flex-col items-center">
                        <p>Сертификаты</p>
                        <p>10</p>
                    </div>
                </div>
            </div>
            <small class="text-muted-foreground">
                User ID: {{ authStore.user!.id }}
            </small>
        </aside>
        <div>
            <h4>Сертификаты</h4>
            <div class="">

            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const authStore = useAuthStore()
useHead({
    title: "Profile | Gazpromic"
})
definePageMeta({
    middleware: 'auth'

})
</script>
