export * from "./types";
export * from "./enums";
export * from "./constants";

declare module '#app' {
    interface NuxtApp {
      $appwrite: {
        client: Client;
        account: Account;
        databases: Databases;
        storage: Storage;
        uniqueId: ID;
      }
    }
  }
  
  declare module 'vue' {
    interface ComponentCustomProperties {
      $hello (msg: string): string
    }
  }
  
