import { useAppDispatch, useAppSelector } from "@/app_redux/hooks";
import { setOnStock } from "@/features/categoryPageFiltersSlice";
import { useRouter } from "next/router";
import { useEffect } from "react";

const AvailabilityFilterItem = () => {

    const router = useRouter();
    const dispatch = useAppDispatch();
    const onStock = useAppSelector(state => state.categoryPageFilters.onStock)

    const handleChange = () => {
        dispatch(setOnStock(!onStock));
    }

    useEffect(() => {
        if (router.query.onStock == "true") {
            dispatch(setOnStock(true));
        }
    }, [])

    return (
        <section className="flex flex-row items-center my-2">
            <input 
                type="checkbox" 
                name="On Stock"
                className="w-4 h-4 mr-4"
                checked={onStock}
                onChange={handleChange}
            />
            <span>On Stock</span>
        </section>
    )
}

export default AvailabilityFilterItem;