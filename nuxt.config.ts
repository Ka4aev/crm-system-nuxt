// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      appwriteEndpoint: process.env.NUXT_PUBLIC_APPWRITE_ENDPOINT,
      appwriteProjectId: process.env.NUXT_PUBLIC_APPWRITE_PROJECT_ID,
      appwriteProjectName: process.env.NUXT_PUBLIC_APPWRITE_PROJECT_NAME,
      appwriteCollectionDeals: process.env.NUXT_PUBLIC_COLLECTION_DEALS,
      appwriteCollectionCustomers: process.env.NUXT_PUBLIC_COLLECTION_CUSTOMERS,
      appwriteCollectionComments: process.env.NUXT_PUBLIC_COLLECTION_COMMENTS,
      appwriteStorageId: process.env.NUXT_PUBLIC_STORAGE_ID,
    },
  },
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/globals.css"],
  modules: [
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
    "@nuxt/eslint",
    "shadcn-nuxt",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Lato: {
            wght: [300, 400, 700],
            ital: [300],
          },
        },
      },
    ],
    "@nuxt/icon",
    "@pinia/nuxt",
  ],
  shadcn: {
    prefix: "Ui",
    componentDir: "./app/components/ui",
  },
  pinia: {
    storesDirs: ["./app/store/**"],
  },
});
