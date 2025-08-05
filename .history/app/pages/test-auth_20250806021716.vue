<template>
  <div class="p-8">
    <h1 class="text-2xl font-bold mb-4">Тест аутентификации</h1>
    
    <div class="space-y-4">
      <div>
        <strong>Статус аутентификации:</strong> 
        <span :class="isAuth ? 'text-green-600' : 'text-red-600'">
          {{ isAuth ? 'Аутентифицирован' : 'Не аутентифицирован' }}
        </span>
      </div>
      
      <div v-if="user.email">
        <strong>Email:</strong> {{ user.email }}
      </div>
      
      <div>
        <strong>Рендеринг:</strong> 
        <span class="text-blue-600">{{ isServer ? 'Серверный' : 'Клиентский' }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { isAuth, user } = storeToRefs(useAuthStore());
const { initializeFromServer } = useAuthInit();

// Определяем, где происходит рендеринг
const isServer = ref(false);
onMounted(() => {
  isServer.value = false;
  initializeFromServer();
});

onServerPrefetch(() => {
  isServer.value = true;
});
</script> 