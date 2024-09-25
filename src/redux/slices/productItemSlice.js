import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productItem: {},
  isLoaded: false,
  success: false,
  error: null,
};

const productItemSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    fetchProductItemPending: (state) => {
      state.isLoaded = true;
    },
    fetchProductItemFulfilled: (state, action) => {
      state.isLoaded = false;
      state.success = true;
      state.productItem = action.payload;
    },
    fetchProductItemFailed: (state, action) => {
      state.isLoaded = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchProductItemPending,
  fetchProductItemFulfilled,
  fetchProductItemFailed,
} = productItemSlice.actions;

export default productItemSlice.reducer;
