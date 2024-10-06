import type { IUser } from "~/types/user";

export const useAuthStore = defineStore("auth", () => {
  const user = ref<IUser | null>(null);
  const userName = computed(() => user.value?.name || "Гость");

  //!Возможно переделать
  const isAuthenticated = computed(() => !!user.value);

  const authSignup = async () => {};
  const authSignout = async () => {};
  const authSignin = async () => {};

  return { authSignup, authSignout, authSignin, userName };
});
