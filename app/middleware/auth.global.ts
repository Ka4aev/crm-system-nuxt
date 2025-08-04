export default defineNuxtRouteMiddleware(async (to) => {
  const { set, clear } = useAuthStore();
  const { setLoading } = useLoading();
  const { account } = getAppwrite();

  setLoading(true);

  try {
    const user = await account.get();
    set({
      email: user.email,
      status: true,
    });
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
