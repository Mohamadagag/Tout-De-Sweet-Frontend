import { configureStore } from "@reduxjs/toolkit";
import lastProductsSlice from "./slices/lastProductsSlice";
import productsSlice from "./slices/productsSlice";
import productItemSlice from "./slices/productItemSlice";
import radnomProductsSlice from "./slices/radnomProductsSlice";
import cartSlice from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    products: productsSlice,
    product: productItemSlice,
    lastProducts: lastProductsSlice,
    random: radnomProductsSlice,
    cart: cartSlice,
  },
});
