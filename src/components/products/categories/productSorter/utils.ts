import { ProductListInterface } from "@/interfaces/ProductInterfaces";

export const sortProductsByValue = (productList: ProductListInterface[], sortValue: string) => {
    const productListArray = [...productList];
    switch (sortValue) {
        case "bestSelling":
            return sortByIdLowToHigh(productListArray);
        case "a-z":
            return sortByAZ(productListArray);
        case "z-a":
            return sortByZA(productListArray);
        case "priceLowToHigh":
            return sortByPriceLowToHigh(productListArray);
        case "priceHighToLow":
            return sortByPriceHighToLow(productListArray);
        
        default:
            return productListArray;
    }
}

const sortByIdLowToHigh = (productListArray: ProductListInterface[]) => {
    const sortedProductList = productListArray.sort((a, b) => a.id - b.id);
    return sortedProductList;
}

const sortByPriceLowToHigh = (productListArray: ProductListInterface[]) => {
    const sortedProductList = productListArray.sort((a, b) => a.unitPrice - b.unitPrice);
    return sortedProductList;
}

const sortByPriceHighToLow = (productListArray: ProductListInterface[]) => {
    const sortedProductList = productListArray.sort((a, b) => b.unitPrice - a.unitPrice);
    return sortedProductList;
}

const sortByAZ = (productListArray: ProductListInterface[]) => {
    const sortedProductList = productListArray.sort((a, b) => a.name.localeCompare(b.name));
    return sortedProductList;
}

const sortByZA = (productListArray: ProductListInterface[]) => {
    const sortedProductList = productListArray.sort((a, b) => b.name.localeCompare(a.name));
    return sortedProductList;
}