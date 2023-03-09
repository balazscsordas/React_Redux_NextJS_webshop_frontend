import { useAppSelector } from "@/app_redux/hooks";
import AvailabilityFilter from "./AvailabilityFilter";
import PriceFilter from "./PriceFilter";
import SizeFilter from "./sizeFilter/SizeFilter";
import VolumeFilter from "./VolumeFilter";

const ProductFilterBlock = () => {

    const categorySizeOptions = useAppSelector(state => state.categoryDetails.categorySizeOptions);
    const categoryVolumeOptions = useAppSelector(state => state.categoryDetails.categoryVolumeOptions);

    return (
        <section className="basis-1 md:basis-1/4">
            <section className="flex flex-col sm:flex-row md:flex-col md:sticky md:top-20 flex-1 justify-between">
                <AvailabilityFilter />
                <PriceFilter />
                { categorySizeOptions.length > 0 && <SizeFilter /> }
                { categoryVolumeOptions.length > 0 && <VolumeFilter /> }
            </section>
        </section>

    )
}

export default ProductFilterBlock;  