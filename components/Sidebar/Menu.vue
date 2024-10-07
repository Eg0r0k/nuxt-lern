<template>
    <header class="flex py-2  flex-col justify-between">
        <nav class="flex flex-col gap-2">
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
