export default defineNuxtRouteMiddleware(async (to) => {
  const { isAuth } = useAuthStore();
  const { setLoading } = useLoading();
  const { $appwrite } = useNuxtApp();

  setLoading(true);

  try {
    const user = await $appwrite.account.get();
    if (user) set(user);

    if (to.path === "/login") {
      return navigateTo("/");
    }
  } catch {
    clear();
    if (to.path !== "/login") {
      return navigateTo("/login");
    }
  } finally {
    setTimeout(() => setLoading(false), 300);
  }
});
