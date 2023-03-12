import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CategoryPageFilterValues {
    onStock: boolean,
    minPrice: number,
    maxPrice: number,
    sizes: string[],
    volumes: string[],
}

const initialState: CategoryPageFilterValues = {
    onStock: false,
    minPrice: 0,
    maxPrice: 0,
    sizes: [],
    volumes: [],
}

export const categoryPageFiltersSlice = createSlice({
    name: 'categoryPageFilters',
    initialState,
    reducers: {
        setOnStock: (state, action: PayloadAction<boolean>) => {
            state.onStock = action.payload;
        },
        setMinPrice: (state, action: PayloadAction<number>) => {
            state.minPrice = action.payload;
        },
        setMaxPrice: (state, action: PayloadAction<number>) => {
            state.maxPrice = action.payload;
        },
        AddSize: (state, action: PayloadAction<string>) => {
            state.sizes.push(action.payload);
        },
        RemoveSize: (state, action: PayloadAction<string>) => {
            const newArray = state.sizes.filter(e => e !== action.payload);
            state.sizes = newArray;
        },
        AddVolume: (state, action: PayloadAction<string>) => {
            state.volumes.push(action.payload);
        },
        RemoveVolume: (state, action: PayloadAction<string>) => {
            const newArray = state.volumes.filter(e => e !== action.payload);
            state.volumes = newArray;
        },
    }
})

export const { setOnStock, setMinPrice, setMaxPrice, AddSize, RemoveSize, AddVolume, RemoveVolume } = categoryPageFiltersSlice.actions;

export default categoryPageFiltersSlice.reducer;