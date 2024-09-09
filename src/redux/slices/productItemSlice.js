import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productItem: {},
  loading: false,
  success: false,
  error: null,
};

const productItemSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    fetchProductItemPending: (state) => {
      state.loading = true;
    },
    fetchProductItemFulfilled: (state, action) => {
      state.loading = false;
      state.success = true;
      state.productItem = action.payload;
    },
    fetchProductItemFailed: (state, action) => {
      state.loading = false;
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
