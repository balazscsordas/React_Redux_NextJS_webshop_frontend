import FilterItemWrapper from "./FilterItemWrapper"
import SizeFilterItem from "./sizeFilter/SizeFilterItem";

const VolumeFilter = () => {
    return (
        <FilterItemWrapper name="Size">
            <SizeFilterItem name="50 ml"/>
            <SizeFilterItem name="100 ml"/>
            <SizeFilterItem name="150 ml"/>
        </FilterItemWrapper>
    )
}

export default VolumeFilter;