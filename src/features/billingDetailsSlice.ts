import { BillingDetailsInterface } from "@/interfaces/BillingDetailsInterface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BillingDetailsStateInterface {
    value: BillingDetailsInterface,
}

const initialState: BillingDetailsStateInterface = {
    value: {
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        streetAddress: "",
        country: "",
        city: "",
        postalCode: "",
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
                mobile: "",
                streetAddress: "",
                country: "",
                city: "",
                postalCode: "",
                aptSuiteUnit: "",
            }
        }
    }
})

export const { setBillingDetails, clearBillingDetails } = billingDetailsSlice.actions;

export default billingDetailsSlice.reducer;