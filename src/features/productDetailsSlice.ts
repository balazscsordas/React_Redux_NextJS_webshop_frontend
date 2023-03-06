import { ProductDataInterface } from "@/interfaces/ProductInterfaces"
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductDetailsStateInterface {
    productData: ProductDataInterface | null;
    sizeOptions: string[];
    volumeOptions: string[];
}

const initialState: ProductDetailsStateInterface = {
    productData: null,
    sizeOptions: [],
    volumeOptions: [],
}

export const productDetailsSlice = createSlice({
    name: 'productDetails',
    initialState,
    reducers: {
        setProductData: (state, action: PayloadAction<ProductDataInterface>) => {
            state.productData = action.payload;
        },
        setSizeOptions: (state, action: PayloadAction<string[]>) => {
            state.sizeOptions = action.payload;
        },
        setVolumeOptions: (state, action: PayloadAction<string[]>) => {
            state.volumeOptions = action.payload;
        },
    }
})

export const { setProductData, setSizeOptions, setVolumeOptions } = productDetailsSlice.actions

export default productDetailsSlice.reducer