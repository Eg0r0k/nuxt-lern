<template>
    <div class=" mx-auto flex p-4 ">
        <div class="text-card-foreground shadow border rounded p-6">
            <div class="flex flex-col items-center mb-4">
                <h2 class="text-2xl font-semibold tracking-tight">Вход</h2>
                <p class="text-sm text-muted-foreground">Добро пожаловать, введите свои данные.</p>
            </div>
            <div class="flex flex-col space-y-2">
                <AutoForm class="space-y-4" :schema="schema" :field-config="{
                    email: {
                        inputProps: {
                            placeholder: 'exemple@test.com'
                        }
                    },
                    password: {
                        label: 'Пароль',
                        inputProps: {
                            type: 'password',
                            placeholder: '••••••••',
                        },
                    },
                }" @submit="onSubmit">
                    <Button :disabled="isLoading" type="submit" class="w-full">

                        <template v-if="!isLoading">
                            Вход
                        </template>
                        <template v-else>
                            Loading...
                        </template>
                    </Button>

                </AutoForm>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
const isLoading = ref(false)
import * as z from 'zod'
import { AutoForm } from '@/components/ui/auto-form'
definePageMeta({
    layout: 'auth'
});
const onSubmit = () => {
    new Promise((resolve: any, reject: any) => {
        setTimeout(() => {
            resolve(isLoading.value = true)
        }, 1000)
    })
}

const schema = z.object({

    email: z.string({
        required_error: "Введите почту."
    }).email(),
    password: z
        .string({
            required_error: 'Пароль обязателен.',
        })
        .min(8, {
            message: 'Пароль должен быть более 8 символов.',
        }),


    acceptTerms: z
        .boolean({ description: "Запомнить меня" })
        .optional()
})


</script>