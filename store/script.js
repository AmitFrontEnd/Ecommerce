import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./cartSlice";
import searchReducer from "./searchSlice";
import { api } from "@/services/apiSlice";
import wishListReducer from "./wishListSlice";

const loadFromLocalStorage = (key) => {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    cartItems: CartReducer,
    search: searchReducer,
    wishlist: wishListReducer,
  },
  preloadedState: {
    cartItems: loadFromLocalStorage("cart"),
    wishlist: loadFromLocalStorage("wishList"),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

store.subscribe(() => {
  const { cartItems, wishlist, search } = store.getState();
  localStorage.setItem("cart", JSON.stringify(cartItems));
  localStorage.setItem("wishList", JSON.stringify(wishlist));
});
