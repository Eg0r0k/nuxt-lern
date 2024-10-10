<template>
    <header class="flex py-2  flex-col justify-between w-full">

        <nav class="flex flex-col  gap-2">
            <div class="flex items-center w-full justify-center my-2">

                <svg class="w-[60px] h-[60px]" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M46.3751 11.5122C45.0643 5.85027 41.7793 1.24454 41.3265 0.5C40.6106 1.5562 37.9907 5.62517 36.6588 10.127C35.204 15.1656 34.9899 19.6328 35.4918 24.0135C35.9902 28.4114 37.8731 32.9306 37.8731 32.9306C38.8733 35.2854 40.3719 37.8307 41.3476 39.0773C42.7778 37.242 46.0645 31.7705 47.0893 24.6368C47.6596 20.6544 47.6842 17.1741 46.3751 11.5122ZM41.3265 37.6575C40.6825 36.4628 39.6823 34.1946 39.5875 30.6624C39.563 27.2687 40.944 24.3425 41.3476 23.7364C41.7073 24.3425 42.8971 26.8877 43.0392 30.368C43.1357 33.7617 41.9916 36.4455 41.3265 37.6575ZM45.9943 21.1219C45.9452 23.2863 45.6837 25.5718 45.3503 26.9397C45.4696 24.5849 45.1836 21.2777 44.6361 18.6805C44.0886 16.1006 42.5391 11.7719 41.302 9.78072C40.1596 11.6854 38.7522 15.4253 38.0152 18.6632C37.2747 21.9011 37.2536 25.8315 37.2536 27.0089C37.0571 26.022 36.5658 22.4725 36.7044 18.9229C36.8202 15.9967 37.5151 12.9667 37.8959 11.5815C39.3489 6.95842 40.9931 3.99759 41.302 3.53008C41.6108 3.99759 43.6815 7.651 44.7554 11.4776C45.8241 15.3041 46.0399 18.9749 45.9943 21.1219Z"
                        fill="#4D8CFD" />
                    <path
                        d="M33.5843 40.3933V46.9902C33.5931 46.9902 33.6001 46.9729 33.6089 46.9729C35.9568 44.6527 39.7648 44.6527 42.1144 46.9729C44.4624 49.2758 44.4624 53.0331 42.1144 55.3533C42.1039 55.3706 42.0934 55.3706 42.0829 55.3879C42.0706 55.3879 42.0583 55.4052 42.0478 55.4225C39.7051 57.7081 36.6447 58.8508 33.5843 58.8508C30.5099 58.8508 27.4355 57.7081 25.0911 55.3879C20.9568 51.3189 20.4672 44.999 23.6188 40.3933C24.0435 39.7699 24.5331 39.1812 25.0911 38.6272C27.4355 36.307 30.5099 35.1642 33.5843 35.1642V19.3039C21.771 19.3039 12.1951 28.7404 12.1951 40.3933C12.1951 52.0461 21.771 61.5 33.5843 61.5C39.7437 61.5 45.2924 58.9201 49.1951 54.8165V40.3933H33.5843Z"
                        fill="currentColor" />
                </svg>

            </div>
            <NuxtLink :to="item.path" v-for="(item, index) in items" :key="index"
                class="inline-flex gap-2 items-center whitespace-nowrap  font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-[16px] justify-start ">
                <Icon :name="item.icon" /> {{ item.title }}
            </NuxtLink>
        </nav>
        <div class="flex flex-col gap-2">

            <NuxtLink to="/settings"
                class=" inline-flex gap-2 items-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-[16px] justify-start ">

                <Icon name="solar:settings-bold" /> Настройки

            </NuxtLink>
            <button @click="$router.push('/auth/login')"
                class="inline-flex gap-2 items-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-[16px] justify-start ">
                <Icon name="ic:baseline-log-out" /> Выйти
            </button>
        </div>
    </header>
</template>

<script setup lang="ts">

const items = ref([
    {
        title: 'Главная',
        path: '/',
        icon: 'bxs:home'
    },
    {
        title: 'План',
        path: '/plan',
        icon: 'teenyicons:compass-solid'
    },
    {
        title: 'Теория',
        path: '/theory',
        icon: 'basil:book-solid'
    },
    {
        title: 'Календарь',
        path: '/calendar',
        icon: 'tabler:calendar'
    },
])
</script>
