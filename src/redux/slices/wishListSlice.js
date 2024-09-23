import { createSlice } from "@reduxjs/toolkit";

const initialWishListItems = localStorage.getItem("wishlist")
  ? JSON.parse(localStorage.getItem("wishlist"))
  : [];

const initialState = {
  wishListItems: initialWishListItems,
};

const wishListSlice = createSlice({
  name: "wish",
  initialState,
  reducers: {
    toggleWishListItem: (state, action) => {
      const existingItem = state.wishListItems.find(
        (item) => item.id === action.payload
      );

      if (existingItem) {
        state.wishListItems = state.wishListItems.filter(
          (item) => item.id !== action.payload
        );
      } else {
        state.wishListItems.push({
          id: action.payload,
          isClicked: true,
        });
      }

      localStorage.setItem("wishlist", JSON.stringify(state.wishListItems));
    },
  },
});

export const { toggleWishListItem } = wishListSlice.actions;

export default wishListSlice.reducer;
