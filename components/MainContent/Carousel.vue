<template>
    <div class="relative w-full">

        <div class="flex justify-between">
            <h2 class="text-2xl mb-4 font-bold">Курсы</h2>
            <nav class=" space-x-1">
                <Button variant="ghost" class="" @click="api?.scrollPrev" :disabled="!api?.canScrollPrev">
                    <Icon name="fluent:chevron-left-12-regular" />

                </Button>
                <Button variant="ghost" @click="api?.scrollNext" :disabled="!api?.canScrollNext">
                    <Icon name="fluent:chevron-right-12-regular" />
                </Button>
            </nav>
        </div>
        <Carousel class="absolute w-full" :opts="{
            align: 'start',
        }">
            <CarouselContent>
                <CarouselItem v-for="(_, index) in 5" :key="index" class="md:basis-1/2 lg:basis-1/3">
                    <div class="p-1">
                        <Card>
                            <CardContent
                                class="flex flex-col justify-between border  text-card-foreground rounded h-[200px] p-6">
                                <div class="flex justify-between">
                                    <div class="flex flex-col">
                                        <h3 class="font-bold mb-2">Stepik-микс: универсальный квиз</h3>
                                        <small class=" underline underline-offset-2">Команда Stepik</small>
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
</template>

<script setup lang="ts">
import type { CarouselApi } from '../ui/carousel';

const api = ref<CarouselApi>()

function setApi(val: CarouselApi) {
    api.value = val
}
const totalCount = ref(0)
const current = ref(0)

watchOnce(api, (api) => {
    if (!api)
        return

    totalCount.value = api.scrollSnapList().length
    current.value = api.selectedScrollSnap() + 1

    api.on('select', () => {
        current.value = api.selectedScrollSnap() + 1
    })
})

</script>