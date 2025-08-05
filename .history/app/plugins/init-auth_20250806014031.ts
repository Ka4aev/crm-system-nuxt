export default defineNuxtPlugin(async () => {
    const { } = 
    const authStore = useAuthStore();
  try {
    const user = await account.get();
    authStore.set(user);
  } catch {
    authStore.clear();
  }
});
