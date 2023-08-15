import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/product-list/ProductListSlice";
import authReducer from "../features/auth/authSlice";
import cartReducer from "../features/cart/cartSlice";
import orderSlice from "../features/order/orderSlice";
import userReducer from "../features/user/userSlice";

export const store = configureStore({
  reducer: {
    product: productReducer,
    auth: authReducer,
    cart: cartReducer,
    order: orderSlice,
    user: userReducer,
  },
});
