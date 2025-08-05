import { Client, Account, Databases, Storage, ID } from "appwrite";

export default defineNuxtPlugin(async () => {
  const client = new Client()
    .setEndpoint(useRuntimeConfig().public.appwriteEndpoint)
    .setProject(useRuntimeConfig().public.appwriteProjectId);

  const account = new Account(client);
  const databases = new Databases(client);
  const storage = new Storage(client);
  const uniqueId = ID.unique();

  // Проверяем аутентификацию на сервере
  let user = null;
  try {
    user = await account.get();
  } catch (error) {
    // Пользователь не аутентифицирован
  }

  return {
    provide: {
      appwrite: {
        client,
        account,
        databases,
        storage,
        uniqueId,
        user, // Передаем пользователя с сервера
      },
    },
  };
}); 