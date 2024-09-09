import { createSlice } from "@reduxjs/toolkit";

const initialCartItems = localStorage.getItem("shopping-cart")
  ? JSON.parse(localStorage.getItem("shopping-cart"))
  : [];

const initialState = {
  cartItems: initialCartItems,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increaseCartQuantity: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      } else {
        state.cartItems.push({ id: action.payload, quantity: 1 });
      }
      localStorage.setItem("shopping-cart", JSON.stringify(state.cartItems));
    },
    decreaseCartQuantity: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item) {
        if (item.quantity === 1) {
          state.cartItems = state.cartItems.filter(
            (item) => item.id !== action.payload
          );
        } else {
          item.quantity -= 1;
        }
      }
      localStorage.setItem("shopping-cart", JSON.stringify(state.cartItems));
    },
    removeItemFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem("shopping-cart", JSON.stringify(state.cartItems));
    },
    getItemQuantity: (state, itemId) => {
      const item = state.cart.cartItems.id.find((item) => item.id === itemId);
      return item ? item.quantity : 0;
    },
  },
});

export const {
  increaseCartQuantity,
  decreaseCartQuantity,
  removeItemFromCart,
  getItemQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
