<script lang="ts" setup>
const { isAuth } = storeToRefs(useAuthStore());
</script>

<template>
  <ClientOnly>
    <section :class="{ grid: isAuth }" style="min-height: 100vh">
      <LayoutSidebar v-if="isAuth" />
      <div>
        <slot />
      </div>
    </section>
    <template #fallback>
      <section style="min-height: 100vh">
        <div>
          <slot />
        </div>
      </section>
    </template>
  </ClientOnly>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 6fr;
}
</style>
