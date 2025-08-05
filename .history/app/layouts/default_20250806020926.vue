<script lang="ts" setup>
const { isAuth } = storeToRefs(useAuthStore());
const router = useRouter();

onMounted(() => {
  if (!isAuth.value) router.push("/login");
});
</script>

<template>
  <section :class="{ grid: true }" style="min-height: 100vh">
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
