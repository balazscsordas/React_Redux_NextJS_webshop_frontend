import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductSortByStateInterface {
    value: "bestSelling" | "a-z" | "z-a" | "priceLowToHigh" | "priceHighToLow" | "dateLowToHigh" | "dateHighToLow";
}

const initialState: ProductSortByStateInterface = {
    value: "bestSelling"
}

export const productSortBySlice = createSlice({
    name: 'productSortBy',
    initialState,
    reducers: {
        setSortByValue: (state, action: PayloadAction<"bestSelling" | "a-z" | "z-a" | "priceLowToHigh" | "priceHighToLow" | "dateLowToHigh" | "dateHighToLow">) => {
            state.value = action.payload;
        },
    }
})

export const { setSortByValue } = productSortBySlice.actions;

export default productSortBySlice.reducer;