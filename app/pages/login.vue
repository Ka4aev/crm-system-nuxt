<script setup lang="ts">
useSeoMeta({
  title: "Login | CRM System",
});

const { login, register } = useAuthStore();
const form = reactive({
  email: "",
  password: "",
});

const handleAuth = async (type: "login" | "register") => {
  if (type === "login") {
    await login(form.email, form.password);
  } else if (type === "register") {
    await register(form.email, form.password);
  }
};
</script>

<template>
  <div class="flex items-center justify-center min-h-screen w-full">
    <div class="rounded bg-sidebar w-1/4 p-5">
      <h1 class="text-2xl font-bold text-center mb-5">Login</h1>

      <form>
        <UiInput
          v-model="form.email"
          placeholder="Email"
          type="email"
          class="mb-3"
        />
        <UiInput
          v-model="form.password"
          placeholder="Password"
          autocomplete
          type="password"
          class="mb-3"
        />
        <div class="flex items-center justify-center gap-5">
          <UiButton type="button" @click="handleAuth('login')">Login</UiButton>
          <UiButton type="button" @click="handleAuth('register')">
            Register
          </UiButton>
        </div>
      </form>
    </div>
  </div>
</template>
