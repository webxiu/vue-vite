import { defineStore } from 'pinia';
import { store } from '@/store';

interface AppState {
  count: number;
}

export const useAppStore = defineStore({
  id: 'app',
  state: (): AppState => ({
    count: 99
  }),
  getters: {
    getCount(): number {
      return this.count;
    }
  },
  actions: {
    increment() {
      this.count++;
      console.log('this.count', this.count);
    }
  }
});

// Need to be used outside the setup
export function useAppStoreWithOut() {
  return useAppStore(store);
}
