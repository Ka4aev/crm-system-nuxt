<script lang="ts" setup>
const { $appwrite } = useNuxtApp();

const isAuth = computed(() => $appwrite.);
</script>

<template>
  <section :class="{ grid: isAuth }" style="min-height: 100vh">
    <ClientOnly>
      <LayoutSidebar v-if="isAuth" />
    </ClientOnly>
    <div>
      <slot />
    </div>
  </section>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 6fr;
}
</style>
