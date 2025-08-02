// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/globals.css"],
  modules: [
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
    "@nuxt/eslint",
    "shadcn-nuxt",
  ],
  shadcn: {
    prefix: "Ui",
    componentDir: "./app/components/ui",
  },
  vite: {
    resolve: {
      alias: {
        "~/lib/utils": "./app/utils/shadcn/utils"
      }
    }
  }
});