export const useAuthInit = () => {
  const { $appwrite } = useNuxtApp();
  const authStore = useAuthStore();

  const initializeFromServer = () => {
    // Проверяем, есть ли данные пользователя с сервера
    if ($appwrite.user) {
      authStore.set($appwrite.user);
    }
  };

  return {
    initializeFromServer,
  };
}; 