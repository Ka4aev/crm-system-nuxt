export default defineNuxtRouteMiddleware(async (to) => {
  const { isAuth } = useAuthStore();

  if (to.name !== "login" && !isAuth) return navigateTo('/login');
});
