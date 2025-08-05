<script lang="ts" setup>
const { isAuth } = storeToRefs(useAuthStore());

onServerPrefetch(async () => {
  console.log(isAuth.value);
});

onMounted(() => {
  console.log(isAuth.value);
  
});
</script>

<template>
  <section class="grid" style="min-height: 100vh">
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
