import { useAppDispatch, useAppSelector } from "@/app_redux/hooks";
import { setCategoryProductList } from "@/features/categoryDetailsSlice";
import { useState } from "react";
import { sortProductsByValue } from "./utils";



interface OptionsInterface {
    name: "Best selling" | "Alphabetically, A-Z" | "Alphabetically, Z-A" | "Price, high to low" | "Price, low to high";
    value: "bestSelling" | "a-z" | "z-a" | "priceLowToHigh" | "priceHighToLow";
}

const options: OptionsInterface[] = [
    {
        name: "Best selling",
        value: "bestSelling"
    },
    {
        name: "Alphabetically, A-Z",
        value: "a-z"
    },
    {
        name: "Alphabetically, Z-A",
        value: "z-a"
    },
    {
        name: "Price, low to high",
        value: "priceLowToHigh"
    },
    {
        name: "Price, high to low",
        value: "priceHighToLow"
    },
];

const ProductSorter = () => {

    const dispatch = useAppDispatch()
    const categoryProductList = useAppSelector(state => state.categoryDetails.categoryProductList);

    const [sorterValue, setSorterValue] = useState("Best selling");

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target;
        setSorterValue(value);
        const newSortedProductList = sortProductsByValue(categoryProductList, value)
        dispatch(setCategoryProductList(newSortedProductList));
    }

    return (
        <section className="flex flex-row justify-between my-6 text-base">
            <span>{categoryProductList.length} products</span>
            <select name="productSorter" onChange={handleChange} defaultValue={sorterValue}>
                {options.map((option, index) => (
                    <option value={option.value} key={index}>{option.name}</option>
                ))}
            </select>
        </section>
    )
}

export default ProductSorter;