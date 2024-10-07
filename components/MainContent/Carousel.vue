<template>
    <div class="relative w-full">
        <div class="flex justify-between">
            <h2 class="text-2xl mb-4 font-bold">Курсы</h2>
            <nav class=" space-x-1">
                <Button variant="ghost" class="" @click="api?.scrollPrev()">
                    <Icon name="fluent:chevron-left-12-regular" />
                </Button>
                <Button variant="ghost" @click="api?.scrollNext()">
                    <Icon name="fluent:chevron-right-12-regular" />
                </Button>
            </nav>
        </div>
        <div class=" absolute w-full">
            <Carousel class="w-full" :opts="{
                align: 'start',
            }" @init-api="setApi">
                <CarouselContent>
                    <CarouselItem v-for="(_, index) in 5" :key="index" class="md:basis-1/2 lg:basis-1/3">
                        <div class="p-1 ">
                            <Card @click="goToCourse">
                                <CardContent
                                    class="flex flex-col justify-between   text-card-foreground  h-[200px] p-6">
                                    <div class="flex justify-between">
                                        <div class="flex flex-col items-start">
                                            <h3 class="font-bold mb-2">Stepik-микс: универсальный квиз</h3>
                                            <small class=" underline underline-offset-2 cursor-pointer"
                                                @click.stop="goToAuthor">Команда Stepik</small>
                                        </div>
                                        <Skeleton class="h-20 w-20" />
                                    </div>
                                    <div class="flex items-center justify-between">
                                        <p class=" text-green-500">Бесплатно</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                </CarouselContent>
            </Carousel>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { CarouselApi } from '../ui/carousel';
import { useRouter } from 'vue-router';

const router = useRouter();

const api = ref<CarouselApi>()

function setApi(val: CarouselApi) {
    api.value = val
}

function goToCourse() {
    router.push('/course');
}

function goToAuthor() {
    router.push('/author');
}
</script>