import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  loading: false,
  success: false,
  error: null,
};

const productsSlice = createSlice({
  name: "products",
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
} = productsSlice.actions;
export default productsSlice.reducer;
