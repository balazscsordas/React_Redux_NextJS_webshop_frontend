import { useAppSelector } from "@/app_redux/hooks";
import { useState } from "react";

const ProductSorter = () => {

    const categoryProductList = useAppSelector(state => state.categoryDetails.categoryProductList);

    const [sorterValue, setSorterValue] = useState("Best selling");

    const options = [
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
        {
            name: "Date, old to new",
            value: "dateOldToNew"
        },
        {
            name: "Date, new to old",
            value: "dateNewToOld"
        }
    ];

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target;
        setSorterValue(value);
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