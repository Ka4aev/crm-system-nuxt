<script setup lang="ts">
useSeoMeta({
  title: `Home | CRM System`,
});

const dragCard = ref<ICard | null>(null);
const sourceColumn = ref<IColumn | null>(null);
const { data, isLoading, refetch } = useKanbanQuery()
</script>

<template>
  <div class="p-10">
    <h1 class="font-bold text-2xl mb-10">CRM System</h1>
    <div v-if="isLoading">Loading...</div>
    <div>
      <UiCard class="mb-3" draggable="true">
        <UiCardHeader role="button">name card</UiCardHeader>
        <UiCardContent>Компания</UiCardContent>
        <UiCardFooter>Date</UiCardFooter>
      </UiCard>
    </div>
  </div>
</template>

<style scoped></style>
