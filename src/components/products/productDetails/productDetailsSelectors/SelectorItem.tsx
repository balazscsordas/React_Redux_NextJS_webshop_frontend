import { useAppDispatch, useAppSelector } from "@/app_redux/hooks";
import { setProductData } from "@/features/productDetailsSlice";
import axios from "axios";

interface Props {
    name: string;
    value: string;
    checked: boolean;
}

const SelectorItem = ({ name, value, checked }: Props) => {

    const dispatch = useAppDispatch();
    const productData = useAppSelector(state => state.productDetails.productData);

    const handleChange = async () => {
        if (productData) {
            const newProductData = await getNewProductData(productData.name, name, value);
            dispatch(setProductData(newProductData));
        }
    }

    const getNewProductData = async (productName: string, filterName: string, filterValue: string) => {
        const options = {
            headers: {
            }
        }
        const url = `${process.env.NEXT_PUBLIC_BASE_URL_SERVER}/api/product/getProductDataByName?productName=${productName}&${filterName}=${filterValue}`;
        const response = await axios.get(url, options);
        return response.data.data.productData;
    }

    return (
        <div className="radioInputWithLabelOnly ">
            <input type="radio" id={value} name={name} value={value} defaultChecked={checked} onChange={handleChange}/>
            <label className="transition-all border border-gray-300 px-4 py-2 min-w-[3.2rem] justify-center m-1 font-medium cursor-pointer" htmlFor={value}>{value}</label>
        </div>
    )
}

export default SelectorItem;