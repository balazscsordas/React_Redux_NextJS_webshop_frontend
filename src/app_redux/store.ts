import { configureStore } from '@reduxjs/toolkit';
import shippingDetailsReducer from "../features/shippingDetailsSlice";
import billingDetailsReducer from "../features/billingDetailsSlice";
import cartProductReducer from "../features/cartProductsSlice";
import paymentDetailsReducer from "../features/paymentDetailsSlice";

export const store = configureStore({
    reducer: {
      shippingDetails: shippingDetailsReducer,
      billingDetails: billingDetailsReducer,
      cartProducts: cartProductReducer,
      paymentDetails: paymentDetailsReducer,
    }
  });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;