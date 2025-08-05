<script lang="ts" setup>
const { isAuth } = storeToRefs(useAuthStore());

onMounted(() => {
  if (!isAuth.value) navigateTo("/login");
});
</script>

<template>
  <section :class="{ grid: isAuth }" style="min-height: 100vh">
    <LayoutSidebar v-if="isAuth" />
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
