<script setup lang="ts">
const { isLoading } = useLoading();
</script>

<template>
  <div>
    <LayoutLoader v-show="isLoading" />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
