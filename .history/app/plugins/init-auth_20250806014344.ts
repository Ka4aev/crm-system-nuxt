export default defineNuxtPlugin(async () => {
  const { $appwrite } = useNuxtApp();
  const authStore = useAuthStore();

  console.log($appwrite);
  

  try {
    const user = await $appwrite.account.get();
    authStore.set(user);
  } catch {
    authStore.clear();
  }
});
