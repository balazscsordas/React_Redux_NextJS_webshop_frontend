import { useAppSelector } from "@/app_redux/hooks";
import SelectorItem from "./SelectorItem";

const VolumeSelector = () => {

    const volumeOptions = useAppSelector(state => state.productDetails.volumeOptions);
    const productData = useAppSelector(state => state.productDetails.productData);

    return (
        <section className="flex flex-row flex-7wrap my-12">
            {volumeOptions.map((option, index) => (
                <SelectorItem 
                    key={index} 
                    name="volume" 
                    value={option}
                    checked={productData?.volume === option ? true : false}
                />
            ))}
        </section>
    )
}

export default VolumeSelector;