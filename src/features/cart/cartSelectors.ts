import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

export const selectCartItems = (state: RootState) => state.cart.items;

export const selectTotalQuantity = createSelector([selectCartItems], (items) =>
  items.reduce((sum, item) => sum + item.quantity, 0)
);

export const selectTotalPrice = createSelector([selectCartItems], (items) =>
  items.reduce((sum, item) => sum + item.price * item.quantity, 0)
);
