export default defineNuxtRouteMiddleware(async (to) => {
  const { $appwrite } = useNuxtApp();
  const authStore = useAuthStore();
  const { setLoading } = useLoading();

  // Если есть данные пользователя с сервера, устанавливаем их
  if ($appwrite.user) {
    authStore.set($appwrite.user);
  }

  // Проверяем аутентификацию на клиенте, если нет серверных данных
  if (!authStore.isAuth) {
    try {
      const user = await $appwrite.account.get();
      if (user) {
        authStore.set(user);
        if (to.path === "/login") {
          return navigateTo("/");
        }
      }
    } catch {
      authStore.clear();
      if (to.path !== "/login") {
        return navigateTo("/login");
      }
    }
  } else {
    // Пользователь аутентифицирован
    if (to.path === "/login") {
      return navigateTo("/");
    }
  }

  setLoading(false);
});
