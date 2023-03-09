import axios from "axios";

export const getNewProducts = async() => {
    const url = process.env.NEXT_PUBLIC_BASE_URL_SERVER + "/api/Product/GetNewProducts";
    const options = {
        headers: {
            withCredentials: true,
        }
    }
    try {
        const response = await axios.get(url, options);
        const newProducts = response.data.data;
        return newProducts;
    } 
    catch (err) {
        err instanceof Error && console.log(err.message);
    }
}