<script setup lang="ts">
const { isLoading } = useLoading();
</script>

<template>
  <div>
    <LayoutLoader v-if="isLoading" />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
