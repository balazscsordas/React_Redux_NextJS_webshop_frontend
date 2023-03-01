import { PaymentOptionInterface } from "@/interfaces/PaymentInterface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PaymentOptionStateInterface {
    value: PaymentOptionInterface | null,
}

const initialState: PaymentOptionStateInterface = {
    value: null
}

export const paymentDetailsSlice = createSlice({
    name: 'paymentDetails',
    initialState,
    reducers: {
        setChoosenPayment: (state, action: PayloadAction<PaymentOptionInterface>) => {
            state.value = action.payload;
        },
        clearChosenPayment: (state) => {
            state.value = null;
        }
    }
})

export const { setChoosenPayment, clearChosenPayment } = paymentDetailsSlice.actions;

export default paymentDetailsSlice.reducer;