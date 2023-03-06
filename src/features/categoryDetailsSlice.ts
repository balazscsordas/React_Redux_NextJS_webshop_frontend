import { ProductListInterface } from "@/interfaces/ProductInterfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CategoryProductListStateInterface {
    categoryProductList: ProductListInterface[];
    categorySizeOptions: string[];
    categoryVolumeOptions: string[];
}

const initialState: CategoryProductListStateInterface = {
    categoryProductList: [],
    categorySizeOptions: [],
    categoryVolumeOptions: [],
}

export const categoryDetailsSlice = createSlice({
    name: 'categoryDetails',
    initialState,
    reducers: {
      setCategoryProductList: (state, action: PayloadAction<ProductListInterface[]>) => {
        state.categoryProductList = action.payload;
      },
      setCategorySizeOptions: (state, action: PayloadAction<string[]>) => {
        state.categorySizeOptions = action.payload;
      },
      setCategoryVolumeOptions: (state, action: PayloadAction<string[]>) => {
          state.categoryVolumeOptions = action.payload;
      },
    }
  })
  
  export const { setCategoryProductList, setCategorySizeOptions, setCategoryVolumeOptions } = categoryDetailsSlice.actions
  
  export default categoryDetailsSlice.reducer