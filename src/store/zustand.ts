import { Product } from "@/types/product";
import { create } from "zustand";

interface ProductCart extends Product {
  qtd: number;
}
type Store = {
  cart: ProductCart[];
  addToCart: (product: Product) => void;
  minusQtdToCart: (product: Product) => void;
  removeToCart: (product: Product) => void;
  myLog: () => void;
  // removeAll: () => void;
};

// set: Função para atualizar o estado (STORE)
// get: Função para pegar uma informação do estado (STORE)
export const useStore = create<Store>((set, get) => ({
  cart: [],
  myLog: () => console.log(get().cart),
  addToCart: (item: Product) =>
    set((state) => {
      const foundProduct = state.cart.find((i) => i._id === item._id);

      if (!foundProduct) {
        return {
          cart: [...state.cart, { ...item, qtd: 1 }],
        };
      } else {
        const arrayProducts = state.cart.map((i) =>
          i._id === item._id
            ? { ...foundProduct, qtd: foundProduct.qtd + 1 }
            : i,
        );

        return { cart: arrayProducts };
      }
    }),
  minusQtdToCart: (item: Product) =>
    set((state) => {
      const foundProduct = state.cart.find((i) => i._id === item._id);

      if (!foundProduct) {
        return {
          cart: [...state.cart],
        };
      } else {
        if (foundProduct.qtd - 1 === 0) {
          const arrayProducts = state.cart.filter((i) => i._id !== item._id);
          return {
            cart: arrayProducts,
          };
        } else {
          const arrayProducts = state.cart.map((i) =>
            i._id === item._id
              ? { ...foundProduct, qtd: foundProduct.qtd - 1 }
              : i,
          );
          return {
            cart: arrayProducts,
          };
        }
      }
    }),
  removeToCart: (item: Product) =>
    set((state) => {
      const arrayProducts = state.cart.filter((i) => i._id !== item._id);
      return {
        cart: arrayProducts,
      };
    }),
  // removeAll: () => set({ cart: 0 }),
}));
