import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem(state, action) {
      const findIndexItem = state.findIndex(
        (cartItem) => cartItem.productId === action.payload.productId,
      );
      if (findIndexItem != -1) {
        state[findIndexItem].quantity += 1;
      } else state.push({ ...action.payload, quantity: 1 });
    },
    increaseQty(state, action) {
      const findIndexItem = state.findIndex(
        (cartItem) => cartItem.productId === action.payload.productId,
      );
      state[findIndexItem].quantity += 1;
    },
    decreaseQty(state, action) {
      const findIndexItem = state.findIndex(
        (cartItem) => cartItem.productId === action.payload.productId,
      );
      state[findIndexItem].quantity -= 1;
      if (state[findIndexItem].quantity < 1) state.splice(findIndexItem, 1);
    },
    removeItem(state, action) {
      const findIndexItem = state.findIndex(
        (cartItem) => cartItem.productId === action.payload.productId,
      );
      state.splice(findIndexItem, 1);
    },
    clearCart() {
      return initialState;
    },
  },
});

export const { addCartItem, increaseQty, decreaseQty, removeItem, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
