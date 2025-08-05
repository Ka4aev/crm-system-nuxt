import { Client, Account, Databases, Storage, ID } from "appwrite";

export const client = new Client().setEndpoint(useRuntimeConfig().public.appwriteEndpoint)
.setProject(useRuntimeConfig().public.appwriteProjectId);

const account = new Account(client);
const databases = new Databases(client);
const storage = new Storage(client);
const uniqueId = ID.unique();

export {
  account,
  databases,
  storage,
  uniqueId,
};


// import { APP_WRITE_ID } from '@/app.constants'
// import { Account, Client, Databases, Storage } from 'appwrite'
//
// export const client = new Client()
//
// client.setEndpoint('https://cloud.appwrite.io/v1').setProject(APP_WRITE_ID)
//
// export const account = new Account(client)
// export { ID } from 'appwrite'
// export const DB = new Databases(client)
// export const storage = new Storage(client)
