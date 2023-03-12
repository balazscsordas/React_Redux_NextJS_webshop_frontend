import { useAppDispatch, useAppSelector } from "@/app_redux/hooks";
import { setOnStock } from "@/features/categoryPageFiltersSlice";
import FilterItemWrapper from "../FilterItemWrapper"
import AvailabilityFilterItem from "./AvailabilityFilterItem";

const AvailabilityFilter = () => {

    return (
        <FilterItemWrapper name="Availability">
            <AvailabilityFilterItem />
        </FilterItemWrapper>
    )
}

export default AvailabilityFilter;