<script lang="ts" setup>
const { isAuth } = useAuthStore();
</script>

<template>
  <section :class="{ grid: isAuth }" style="min-height: 100vh">
    <LayoutSidebar v-show="isAuth" />
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
