import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  loading: false,
  success: false,
  error: null,
};

const radnomProductsSlice = createSlice({
  name: "random",
  initialState,
  reducers: {
    randomProductsPending: (state) => {
      state.loading = true;
    },
    randomProductsFulfilled: (state, action) => {
      state.loading = false;
      state.success = true;
      state.products = action.payload;
    },
    randomProductsFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  randomProductsPending,
  randomProductsFulfilled,
  randomProductsFailed,
} = radnomProductsSlice.actions;

export default radnomProductsSlice.reducer;
