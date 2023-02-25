import FilterItemWrapper from "../FilterItemWrapper"
import SizeFilterItem from "./SizeFilterItem";

const SizeFilter = () => {
    return (
        <FilterItemWrapper name="Size">
            <SizeFilterItem name="S"/>
            <SizeFilterItem name="M"/>
            <SizeFilterItem name="L"/>
        </FilterItemWrapper>
    )
}

export default SizeFilter;