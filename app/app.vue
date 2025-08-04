<script setup lang="ts">
const { isLoading } = useLoading();
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
      <LayoutLoader v-show="isLoading" />
    </NuxtLayout>
  </div>
</template>
