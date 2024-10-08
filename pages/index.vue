<template>
    <div class="w-full grid  lg:grid-cols-[5fr_1fr] h-full">

        <MainContent />
        <SideProfile />
    </div>
</template>
<script setup lang="ts">
definePageMeta({
    middleware: 'auth'
})
</script>