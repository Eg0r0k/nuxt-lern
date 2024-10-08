import type { IUser } from "~/types/user";

export const useAuthStore = defineStore("auth", () => {
  const user = ref<IUser | null>({
    id: 1,
    username: "Anton",
    name: "Антонов Антон",
    role: "user",
    level: 2,
    certificate: 1,
    email: "test@email.com",
    portfolio: "",
  });
  const userName = computed(() => user.value?.name || "Guest");
  const userAbbr = computed(
    () => user.value?.name.slice(0, 2).toUpperCase() || "GU"
  );
  //!Возможно переделать
  const isAuthenticated = computed(() => !!user.value);

  const authSignup = async (): Promise<void> => {};
  const authSignout = async (): Promise<void> => {};
  const authSignin = async (): Promise<void> => {};

  return {
    authSignup,
    isAuthenticated,
    authSignout,
    authSignin,
    userName,
    userAbbr,
    user,
  };
});
