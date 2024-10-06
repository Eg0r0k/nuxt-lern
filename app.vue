<template>
  <div class=" min-h-screen " style="display:flex;flex-direction: row;">

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