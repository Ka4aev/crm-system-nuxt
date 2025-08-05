<script lang="ts" setup>
const { isAuth } = storeToRefs(useAuthStore());
const router = useRouter();

onMounted(() => {
  if (!isAuth.value) router.p;
});
</script>

<template>
  <section :class="{ grid: isAuth }" style="min-height: 100vh">
    <LayoutSidebar />
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
