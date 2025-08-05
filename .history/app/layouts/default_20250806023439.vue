<script lang="ts" setup>
const { isAuth } = storeToRefs(useAuthStore());

onMounted
</script>

<template>
  <ClientOnly>
    <section :class="{ grid: isAuth }" style="min-height: 100vh">
      <LayoutSidebar v-if="isAuth" />
      <div>
        <slot />
      </div>
    </section>
  </ClientOnly>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 6fr;
}
</style>
