import { useAppSelector } from "@/app_redux/hooks";
import FilterItemWrapper from "../FilterItemWrapper"
import VolumeFilterItem from "./VolumeFilterItem";

const VolumeFilter = () => {

    const categoryVolumeOptions = useAppSelector(state => state.categoryDetails.categoryVolumeOptions);
    
    return (
        <FilterItemWrapper name="Volume">
            {categoryVolumeOptions.map((option, index) => (
                <VolumeFilterItem key={index} name={option}/>
            ))}
        </FilterItemWrapper>
    )
}

export default VolumeFilter;