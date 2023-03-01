import AvailabilityFilter from "./AvailabilityFilter";
import PriceFilter from "./PriceFilter";
import SizeFilter from "./sizeFilter/SizeFilter";
import VolumeFilter from "./VolumeFilter";

const ProductFilterBlock = () => {
    return (
        <section className="basis-1/4">
            <section className="flex flex-col sticky top-20">
                <AvailabilityFilter />
                <PriceFilter />
                <SizeFilter />
                <VolumeFilter />
            </section>
        </section>

    )
}

export default ProductFilterBlock;  