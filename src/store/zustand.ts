import { create } from "zustand";

type Store = {
  cart: number;
  addToCart: () => void;
  removeToCart: () => void;
  removeAll: () => void;
};

// set: Função para atualizar o estado (STORE)
// get: Função para pegar uma informação do estado (STORE)
export const useStore = create<Store>((set, get) => ({
  cart: 1,
  addToCart: () => set((state) => ({ cart: state.cart + 1 })),
  removeToCart: () => set((state) => ({ cart: state.cart - 1 })),
  removeAll: () => set({ cart: 0 }),
}));
