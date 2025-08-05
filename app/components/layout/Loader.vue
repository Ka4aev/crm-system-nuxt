<template>
  <div class="loader-selector">
    <NuxtImg src="/loader.svg" alt="" class="w-32" />
  </div>
</template>

<style scoped>
.loader-selector {
  @apply bg-sidebar fixed flex justify-center items-center top-0 bottom-0 left-0 right-0 w-screen h-screen;
}
</style>
