<template>
    <div class="relative w-full min-h-[300px] ">
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
        <div class=" relative w-full">
            <Carousel class="w-full absolute" :opts="{
                align: 'start',
            }" @init-api="setApi">
                <CarouselContent>
                    <CarouselItem v-for="(_, index) in 5" :key="index" class="md:basis-1/2 lg:basis-1/3">
                        <div class="p-1 ">
                            <MainContentCard />
                        </div>
                    </CarouselItem>
                </CarouselContent>
            </Carousel>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { CarouselApi } from '../ui/carousel';

const api = ref<CarouselApi>()

function setApi(val: CarouselApi) {
    api.value = val
}


</script>