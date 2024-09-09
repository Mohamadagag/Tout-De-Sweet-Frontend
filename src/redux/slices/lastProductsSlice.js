import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  loading: false,
  success: false,
  error: null,
};

const lastProductsSlice = createSlice({
  name: "lastProducts",
  initialState,
  reducers: {
    fetchProductsPending: (state) => {
      state.loading = true;
    },
    fetchProductsFulfilled: (state, action) => {
      state.loading = false;
      state.success = true;
      state.products = action.payload;
    },
    fetchProductsFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchProductsPending,
  fetchProductsFulfilled,
  fetchProductsFailed,
} = lastProductsSlice.actions;

export default lastProductsSlice.reducer;
