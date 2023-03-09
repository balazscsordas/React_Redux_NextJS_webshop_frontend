import { useAppSelector } from "@/app_redux/hooks";
import SelectorItem from "./SelectorItem";

const SizeSelector = () => {

    const sizeOptions = useAppSelector(state => state.productDetails.sizeOptions);
    const productData = useAppSelector(state => state.productDetails.productData);

    return (
        <section className="flex flex-row flex-wrap my-6 sm:my-12">
            {sizeOptions.map((option, index) => (
                <SelectorItem 
                    key={index}
                    name="size" 
                    value={option}
                    checked={productData?.size === option ? true : false}
                />
            ))}
        </section>
    )
}

export default SizeSelector;