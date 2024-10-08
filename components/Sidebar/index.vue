<template>
    <div class="relative p-0 text-card-foreground  border-r lg:min-w-[161px] lg:p-4 min-w-0">
        <div
            class="z-50 flex items-center justify-between w-full p-4 border-t bg-background  text-card-foreground shadow fixed bottom-0 left-0 right-0 lg:hidden ">
            <NuxtLink :to="item.path" v-for="(item, index) in items" :key="index"
                class="inline-flex gap-2 items-center whitespace-nowrap  font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-[16px] justify-start ">
                <Icon :name="item.icon" />
            </NuxtLink>

        </div>
        <div class="hidden h-full lg:flex fixed top-0 bottom-0  z-50">
            <SidebarMenu />

        </div>
    </div>
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
        title: "Профиль",
        icon: 'iconamoon:profile-fill',
        path: '/profile'
    },
    {
        title: "Настройки",
        icon: "solar:settings-bold",
        path: "/settings"
    },
    {
        title: 'Календарь',
        path: '/calendar',
        icon: 'tabler:calendar'
    },
])

</script>
