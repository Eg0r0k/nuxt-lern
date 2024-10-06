<template>
    <div class="border-l text-card-foreground shadow hidden p-4 lg:flex flex-col justify-between">
        <SideProfileAvatar avatarUrl="https://github.com/radix-vue.png" altText="@radix-vue" fallbackText="CN"
            name="Антон Антонович" email="exemple@test.ru" />
        <SideProfileStats level="8" certificates="1" />
        <SideProfileList :projectCount="3" />
    </div>
</template>
<script setup lang="ts">

</script>