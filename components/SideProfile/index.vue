<template>
    <div class="border-l text-card-foreground shadow hidden p-4 lg:flex flex-col justify-between">
        <SideProfileAvatar avatarUrl="https://github.com/radix-vue.png" altText="@radix-vue"
            :fallbackText="authStore.userAbbr" :name="authStore.userName" :email="authStore.user!.email" />
        <SideProfileStats :level="authStore.user!.level" :certificates="authStore.user!.certificate" />
        <SideProfileList :projectCount="3" />
    </div>
</template>
<script setup lang="ts">
const authStore = useAuthStore()
</script>