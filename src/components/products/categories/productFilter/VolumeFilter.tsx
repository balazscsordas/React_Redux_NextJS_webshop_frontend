import { useAppSelector } from "@/app_redux/hooks";
import FilterItemWrapper from "./FilterItemWrapper"
import SizeFilterItem from "./sizeFilter/SizeFilterItem";

const VolumeFilter = () => {

    const categoryVolumeOptions = useAppSelector(state => state.categoryDetails.categoryVolumeOptions);

    return (
        <FilterItemWrapper name="Volume">
            {categoryVolumeOptions.map((option, index) => (
                <SizeFilterItem key={index} name={option}/>
            ))}
        </FilterItemWrapper>
    )
}

export default VolumeFilter;