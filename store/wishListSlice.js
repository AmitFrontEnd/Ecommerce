import { createSlice } from "@reduxjs/toolkit";

const wishListSlice = createSlice({
  name: "wishlist",
  initialState: [],
  reducers: {
    addToWishList(state, action) {
      const findIndexItem = state.findIndex(
        (wishlist) => wishlist.productId === action.payload.productId,
      );
      if (findIndexItem === -1) state.push(action.payload);
      else state.splice(findIndexItem, 1);
    },
    removeWishListItem(state, action) {
      const findIndexItem = state.findIndex(
        (wishlist) => wishlist.productId === action.payload,
      );

      state.splice(findIndexItem, 1);
    },
  },
});

export const { addToWishList, removeWishListItem } = wishListSlice.actions;

export default wishListSlice.reducer;
