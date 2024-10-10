<template>
    <div class="flex flex-col items-center mb-3">
        <NuxtLink to="/profile">
            <Avatar>
                <AvatarImage :src="avatarUrl || 'default-avatar.png'" :alt="altText" />
                <AvatarFallback>{{ fallbackText }}</AvatarFallback>
            </Avatar>
        </NuxtLink>


        <h2 class="text-2xl font-medium truncate max-w-[240px] ">{{ name }}</h2>
        <p class="text-sm text-muted-foreground">{{ email }}</p>

        <!-- <Skeleton class="h-[20px] w-[160px] rounded-xl mb-2 mt-2" />
        <Skeleton class="h-[16px] w-[120px] rounded-xl" /> -->
    </div>
</template>

<script setup lang="ts">
import Avatar from '../ui/avatar/Avatar.vue';

interface Props {
    avatarUrl: string;
    altText: string;
    fallbackText: string;
    name: string;
    email: string;

}
const props = defineProps<Props>()
</script>