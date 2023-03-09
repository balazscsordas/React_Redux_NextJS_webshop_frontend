import { ProductDataInterface } from "@/interfaces/ProductInterfaces";
import axios from "axios";

export const getNewProductData = async (productName: string, filter1: string) => {
    const options = {
        headers: {
        }
    }
    const url = `${process.env.NEXT_PUBLIC_BASE_URL_SERVER}/api/product/${productName}/${filter1}`;
    const response = await axios.get(url, options);
    const productData: ProductDataInterface = response.data.data.productData;
    return productData;
} 