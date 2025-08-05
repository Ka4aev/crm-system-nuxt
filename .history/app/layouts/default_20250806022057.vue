<script lang="ts" setup>
const { $appwrite } = useNuxtApp();

const { isAuth } = storeToRefs(useAuthStore());
const router = useRouter();

onMounted(() => {
  if (!isAuth.value) router.push("/login");
});
</script>

<template>
  <section
    :class="{ grid: $appwrite.account.status }"
    style="min-height: 100vh"
  >
    <ClientOnly>
      <LayoutSidebar v-if="$appwrite.account.status" />
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
