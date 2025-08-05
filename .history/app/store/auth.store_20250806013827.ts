interface IAuthStore {
  email: string;
  status: boolean;
}

export const useAuthStore = defineStore("auth-store", () => {
  const { $appwrite } = useNuxtApp();
  const { setLoading } = useLoading();

  const user = ref<IAuthStore>({
    email: "",
    status: false,
  });

  const isAuth = computed(() => user.value.status);

  const set = (input: IAuthStore) => {
    user.value = input;
  };

  const clear = () => {
    user.value = {
      email: "",
      status: false,
    };
  };

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      await $appwrite.account.createEmailPasswordSession(email, password);
      const response = await account.get();
      if (response) set(response);

      await navigateTo("/");
    } finally {
      setLoading(false);
    }
  };

  const register = async (email: string, password: string) => {
    await account.create(uniqueId, email, password);
    await login(email, password);
  };

  const logout = async () => {
    setLoading(true);
    try {
      await account.deleteSession("current");
      clear();
      await navigateTo("/login");
    } catch {
      console.log("error logged out");
    } finally {
      setLoading(false);
    }
  };

  return {
    user,
    isAuth,
    clear,
    set,
    login,
    register,
    logout,
  };
});
