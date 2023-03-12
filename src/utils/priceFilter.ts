import { ProductListInterface } from "@/interfaces/ProductInterfaces";

export const getMinPrice = (categoryProductList: ProductListInterface[]) => {
    let minPrice = categoryProductList[0].unitPrice;
    categoryProductList.map(product => {
        if (product.unitPrice < minPrice) {
            minPrice = product.unitPrice;
        }
    });
    return minPrice;
}

export const getMaxPrice = (categoryProductList: ProductListInterface[]) => {
    let maxPrice = 0;
    categoryProductList.map(product => {
        if (product.unitPrice > maxPrice) {
            maxPrice = product.unitPrice;
        }
    });
    return maxPrice;
}

export const getStep = (categoryProductList: ProductListInterface[]) => {
    const maxPrice = getMaxPrice(categoryProductList);
    const minPrice = getMinPrice(categoryProductList);
    const deficit = maxPrice - minPrice;

    if (maxPrice === minPrice) return 0;
    if (deficit > 0 && deficit <= 10) return 1
    return deficit / 10;
}