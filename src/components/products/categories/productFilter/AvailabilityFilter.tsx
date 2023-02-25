import FilterItemWrapper from "./FilterItemWrapper"
import SizeFilterItem from "./sizeFilter/SizeFilterItem";

const AvailabilityFilter = () => {
    return (
        <FilterItemWrapper name="Availability">
            <SizeFilterItem name="On Stock"/>
        </FilterItemWrapper>
    )
}

export default AvailabilityFilter;