<template>
    <div class="p-1 ">
        <Card @click="goToCourse">
            <CardContent class="flex flex-col justify-between   text-card-foreground  h-[200px] p-6">
                <div class="flex justify-between">
                    <div class="flex flex-col items-start">
                        <h3 class="font-bold mb-2">{{ title }}</h3>
                        <small class=" underline underline-offset-2 cursor-pointer" @click.stop="goToAuthor">
                            {{ author }}
                        </small>
                    </div>
                    <Skeleton class="h-20 w-20" />
                </div>
                <div class="flex items-center justify-between">
                    <p class=" text-green-500">{{ priceing }}</p>
                    <button @click.stop="addToFavorite"
                        class=" rounded-full border p-3 flex items-center justify-center transition hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:bg-accent "
                        variant="outline">
                        <Icon size="14" name="mdi:favorite" />
                    </button>
                </div>
            </CardContent>
        </Card>
    </div>
</template>

<script setup lang="ts">
import Card from '../ui/card/Card.vue';


interface Props {
    courseId?: number;
    title?: string;
    author?: string;
    priceing?: string;
}

const props = withDefaults(defineProps<Props>(), {
    courseId: 1,
    title: "Stepik-микс: универсальный квиз",
    author: "Команда Stepik",
    priceing: 'Бесплатно'
})


const router = useRouter();

const addToFavorite = () => {

}

const goToCourse = () => {
    router.push('/course/1');
}

const goToAuthor = () => {
    router.push('/author/1');
}
</script>

<style lang="scss" scoped></style>