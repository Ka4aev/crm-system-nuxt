// // plugins/init-auth.client.ts
export default defineNuxtPlugin(async () => {
  const authStore = useAuthStore();
  const { account } = getAppwrite();

  try {
    const user = await account.get();
    authStore.set(user);
  } catch {
    authStore.clear();
  }
});
