<script lang="ts" setup>
const { isAuth } = useNuxtApp();
</script>

<template>

<ClientOnly>
  <section :class="{ grid: isAuth }" style="min-height: 100vh">
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
