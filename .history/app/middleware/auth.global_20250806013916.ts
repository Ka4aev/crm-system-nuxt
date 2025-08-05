export default defineNuxtRouteMiddleware(async (to) => {
  const { set, clear } = useAuthStore();
  const { setLoading } = useLoading();

  setLoading(true);

  try {
    const user = await account.get();
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
