import { defineStore } from "pinia";
import { store } from "@/store";

interface UserInfoType {
  username: string;
  password: string;
}

interface AppState {
  userInfo: UserInfoType;
}

export const useUserStore = defineStore({
  id: "user",
  state: (): AppState => ({
    userInfo: {
      username: "张三",
      password: "123456",
    },
  }),
  getters: {
    getUserInfo(): UserInfoType {
      return this.getUserInfo;
    },
  },
  actions: {
    setUserInfo(userInfo: UserInfoType): void {
      this.userInfo = userInfo;
    },
  },
});

export function useUserStoreWithOut() {
  return useUserStore(store);
}
