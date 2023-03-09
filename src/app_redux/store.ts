import { configureStore } from '@reduxjs/toolkit';
import shippingDetailsReducer from "../features/shippingDetailsSlice";
import billingDetailsReducer from "../features/billingDetailsSlice";
import cartProductReducer from "../features/cartProductsSlice";
import paymentDetailsReducer from "../features/paymentDetailsSlice";
import productDetailsReducer from "../features/productDetailsSlice";
import categoryDetailsReducer from "../features/categoryDetailsSlice";

export const store = configureStore({
    reducer: {
      shippingDetails: shippingDetailsReducer,
      billingDetails: billingDetailsReducer,
      cartProducts: cartProductReducer,
      paymentDetails: paymentDetailsReducer,
      productDetails: productDetailsReducer,
      categoryDetails: categoryDetailsReducer,
    }
  });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;