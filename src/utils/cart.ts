import { ProductInCartInterface } from "@/interfaces/ProductInterfaces";

export const getNumberOfItemsInCart = (cartProducts: ProductInCartInterface[]) => {
    let numberOfElements = 0;
    cartProducts.map(product => (
        numberOfElements += product.quantity
    ))
    return numberOfElements;
}

export const getTotalCartValue = (cartProducts: ProductInCartInterface[]) => {
    let totalCartValue = 0;
    cartProducts.map(product => (
        totalCartValue += product.quantity * product.unitPrice
    ))
    return totalCartValue;
}