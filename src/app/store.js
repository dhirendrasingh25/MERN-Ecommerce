import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/product-list/ProductListSlice";

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});
