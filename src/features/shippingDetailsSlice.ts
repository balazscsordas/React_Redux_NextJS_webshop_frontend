import { ShippingDetailsInterface } from '@/interfaces/checkout/ShippingDetailsInterface'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ShippingDetailsStateInterface {
  value: ShippingDetailsInterface,
}

const initialState: ShippingDetailsStateInterface = {
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
  },
}

export const shippingDetailsSlice = createSlice({
  name: 'shippingDetails',
  initialState,
  reducers: {
    setShippingDetails: (state, action: PayloadAction<ShippingDetailsInterface>) => {
      state.value = action.payload;
    },
    clearShippingDetails: (state) => {
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

export const { setShippingDetails, clearShippingDetails } = shippingDetailsSlice.actions

export default shippingDetailsSlice.reducer