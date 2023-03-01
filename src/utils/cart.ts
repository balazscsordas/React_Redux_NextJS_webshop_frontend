import { ProductInCartInterface } from "@/interfaces/ProductInCartInterface";

export const getNumberOfItemsInCart = (cartProducts: ProductInCartInterface[]) => {
    let numberOfElements = 0;
    cartProducts.map(product => (
        numberOfElements += product.productQuantity
    ))
    return numberOfElements;
}

export const getTotalCartValue = (cartProducts: ProductInCartInterface[]) => {
    let totalCartValue = 0;
    cartProducts.map(product => (
        totalCartValue += product.productQuantity * product.productUnitPrice
    ))
    return totalCartValue;
}