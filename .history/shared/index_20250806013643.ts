import { Client, Account, Databases, Storage, ID } from "appwrite";

export * from "./types";
export * from "./enums";
export * from "./constants";

declare module "#app" {
  interface NuxtApp {
    $appwrite: {
      client: Client;
      account: Account;
      databases: Databases;
      storage: Storage;
      uniqueId: ID;
    };
  }
}

declare module "vue" {
  interface ComponentCustomProperties {
    $appwrite: {
      client: Client;
      account: Account;
      databases: Databases;
      storage: Storage;
      uniqueId: ID;
    };
  }
}
