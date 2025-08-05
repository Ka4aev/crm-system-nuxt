<script lang="ts" setup>
const { $appwrite } = useNuxtApp();

const router = useRouter();
</script>

<template>
  <section
    :class="{ grid: $appwrite.account.status }"
    style="min-height: 100vh"
  >
    <LayoutSidebar v-if="$appwrite.account.status" />
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
