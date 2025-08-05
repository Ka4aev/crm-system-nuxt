export default defineNuxtRouteMiddleware(async (to) => {
  const { isAuth } = useAuthStore();

  if (to.name === "login") return;
});
