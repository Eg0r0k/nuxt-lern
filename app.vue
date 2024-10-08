<template>
  <div class=" min-h-screen " style="display:flex;flex-direction: row;">
    <NuxtLoadingIndicator color="#4D8CFD" />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script lang="ts" setup>
useSeoMeta({
  title: 'Gazpromic',
  ogTitle: 'Gazpromic',
  description: 'Здесь вы можете попробывать пройти курсы.',
  ogDescription: 'Здесь вы можете попробывать пройти курсы.',

})
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>