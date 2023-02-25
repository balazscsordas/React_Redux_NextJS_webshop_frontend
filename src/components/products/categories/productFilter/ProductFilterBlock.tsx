import AvailabilityFilter from "./AvailabilityFilter";
import PriceFilter from "./PriceFilter";
import SizeFilter from "./sizeFilter/SizeFilter";

const ProductFilterBlock = () => {
    return (
        <section className="flex flex-col basis-1/4">
            <AvailabilityFilter />
            <PriceFilter />
            <SizeFilter />
        </section>
    )
}

export default ProductFilterBlock;  