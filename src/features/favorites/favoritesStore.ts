import { create } from "zustand";
import type { Product } from "../../types";

interface FavoritesState {
  items: Product[];
  toggleFavorite: (product: Product) => void;

  isFavorite: (id: string) => boolean;
}

export const useFavoritesStore = create<FavoritesState>((set, get) => ({
  items: [],

  toggleFavorite: (product) =>
    set((state) => {
      const alreadyExists = state.items.some((item) => item.id === product.id);
      return {
        items: alreadyExists
          ? state.items.filter((item) => item.id !== product.id) 
          : [...state.items, product],
      };
    }),

  isFavorite: (id) => get().items.some((item) => item.id === id),
}));
