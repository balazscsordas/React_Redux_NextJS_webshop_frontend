import { ProductInCartInterface } from "@/interfaces/ProductInterfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartProductsStateInterface {
    value: ProductInCartInterface[],
}

interface ChangeProductQuantityParameterInterface {
    productId: number,
    newQuantity: number,
}

const initialState: CartProductsStateInterface = {
    value: []
}

export const cartProductsSlice = createSlice({
    name: "cartProducts",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<ProductInCartInterface>) => {
            const actionIsInCart = state.value.some(p => p.id === action.payload.id)
            if (actionIsInCart) {
                state.value.map(product => {
                    if (product.id === action.payload.id) {
                        product.quantity = product.quantity + action.payload.quantity
                    }
                })
            } 
            else {
                state.value.push(action.payload);
            }
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            state.value = state.value.filter(product => product.id !== action.payload)
        },
        changeProductQuantity: (state, action: PayloadAction<ChangeProductQuantityParameterInterface>) => {
            if (action.payload.newQuantity > 0) {
                const updatedCart = state.value.map(product => {
                    if (product.id === action.payload.productId) {
                        return {...product, quantity: action.payload.newQuantity}
                    }
                    return product;
                })
                state.value = updatedCart;
            }
        },
        clearCart: (state) => {
            state.value = [];
        }
    }
})

export const { addToCart, removeFromCart, changeProductQuantity, clearCart } = cartProductsSlice.actions;

export default cartProductsSlice.reducer;