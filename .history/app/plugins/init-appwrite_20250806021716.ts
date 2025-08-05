import { Client, Account, Databases, Storage, ID } from "appwrite";

export default defineNuxtPlugin(() => {
  const client = new Client()
    .setEndpoint(useRuntimeConfig().public.appwriteEndpoint)
    .setProject(useRuntimeConfig().public.appwriteProjectId);

  const account = new Account(client);
  const databases = new Databases(client);
  const storage = new Storage(client);
  const uniqueId = ID.unique();

  return {
    provide: {
      appwrite: {
        client,
        account,
        databases,
        storage,
        uniqueId,
      },
    },
  };
});
