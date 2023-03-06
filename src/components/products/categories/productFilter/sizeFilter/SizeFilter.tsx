import { useAppSelector } from "@/app_redux/hooks";
import FilterItemWrapper from "../FilterItemWrapper"
import SizeFilterItem from "./SizeFilterItem";

const SizeFilter = () => {

    const categorySizeOptions = useAppSelector(state => state.categoryDetails.categorySizeOptions);

    return (
        <FilterItemWrapper name="Size">
            {categorySizeOptions.map((option, index) => (
                <SizeFilterItem key={index} name={option}/>
            ))}
        </FilterItemWrapper>
    )
}

export default SizeFilter;