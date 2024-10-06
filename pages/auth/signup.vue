<template>
    <!-- <div class="relative hidden h-full flex-col bg-muted p-10  dark:border-r lg:flex">
        <div class="absolute inset-0 bg-zinc-900"></div>
    </div> -->
    <div class=" mx-auto flex p-4 ">
        <div class="text-card-foreground shadow border rounded p-6">
            <div class="flex flex-col items-center mb-4">
                <h2 class="text-2xl font-semibold tracking-tight">Создайте аккаунт</h2>
                <p class="text-sm text-muted-foreground">Заполните все поля.</p>
            </div>
            <div class="flex flex-col space-y-2">
                <AutoForm class="space-y-4" :schema="schema" :field-config="{
                    username: {
                        inputProps: {
                            placeholder: 'MyUsername'
                        }
                    },
                    password: {
                        label: 'Пароль',
                        inputProps: {
                            type: 'password',
                            placeholder: '••••••••',
                        },
                    },
                    email: {
                        inputProps: {
                            placeholder: 'exemple@test.com'
                        }
                    },
                    acceptTerms: {
                        label: 'Согласен с условиями использования.',
                        inputProps: {
                            required: true,
                        },
                    },



                    bio: {
                        label: 'О себе',
                        component: 'textarea',
                    },

                    marshmallows: {
                        label: 'Есть ли у вас опыт обучения на онлайн-курсах?',
                        component: 'radio',
                    },


                }" @submit="onSubmit">
                    <template #acceptTerms="slotProps">
                        <AutoFormField v-bind="slotProps" />
                        <div class="!mt-2  text-sm">
                            Я ознакомлен с <button class="text-primary underline">
                                условиями использования
                            </button>.
                        </div>
                    </template>



                    <Button type="submit" class="w-full">
                        Создать
                    </Button>
                </AutoForm>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
const isLoading = ref(true)
import * as z from 'zod'
import { AutoForm, AutoFormField } from '@/components/ui/auto-form'
definePageMeta({
    layout: 'auth'
});
const onSubmit = () => {
    
}
enum AdvertisingChannel {
    Friends = 'Друзья/Знакомые',
    SocialMedia = 'Социальные сети',
    ContextualAdvertising = 'Контекстная реклама',
    TargetedAdvertising = 'Таргетированная реклама',
    Other = 'Другое',
}

const schema = z.object({
    username: z
        .string({
            required_error: 'Имя обязательно.',
        })
        .min(2, {
            message: 'Имя длинее 2 символов.',
        }),
    email: z.string().email(),
    password: z
        .string({
            required_error: 'Пароль обязателен.',
        })
        .min(8, {
            message: 'Пароль должен быть более 8 символов.',
        }),

    marshmallows: z
        .enum(['Нет, это мой первый опыт', 'Да, я обучался/обучаюсь', 'Да, у меня есть опыт прохождения курсов', 'Я знаком с некоторыми платформами']),

    sports: z.nativeEnum(AdvertisingChannel).describe('Откуда узнали о нас?'),

    bio: z
        .string()
        .min(10, {
            message: 'Информация должна быть дленее 8 символов.',
        })
        .max(160, {
            message: 'Информация не должна быть дленее 160 символов.',
        })
        .optional(),


    acceptTerms: z
        .boolean()
        .refine(value => value, {
            message: 'You must accept the terms and conditions.',
            path: ['acceptTerms'],
        }),
})


</script>