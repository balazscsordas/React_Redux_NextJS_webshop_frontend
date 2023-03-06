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