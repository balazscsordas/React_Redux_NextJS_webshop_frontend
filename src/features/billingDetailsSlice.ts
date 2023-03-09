import { BillingDetailsInterface } from "@/interfaces/checkout/BillingDetailsInterface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BillingDetailsStateInterface {
    value: BillingDetailsInterface,
}

const initialState: BillingDetailsStateInterface = {
    value: {
        firstName: "",
        lastName: "",
        email: "",
        mobileNumber: "",
        streetAddress: "",
        country: "",
        city: "",
        postalCode: 0,
        aptSuiteUnit: "",
    }
}

export const billingDetailsSlice = createSlice({
    name: 'billingDetails',
    initialState,
    reducers: {
        setBillingDetails: (state, action: PayloadAction<BillingDetailsInterface>) => {
            state.value = action.payload;
        },
        clearBillingDetails: (state) => {
            state.value = {
                firstName: "",
                lastName: "",
                email: "",
                mobileNumber: "",
                streetAddress: "",
                country: "",
                city: "",
                postalCode: 0,
                aptSuiteUnit: "",
            }
        }
    }
})

export const { setBillingDetails, clearBillingDetails } = billingDetailsSlice.actions;

export default billingDetailsSlice.reducer;