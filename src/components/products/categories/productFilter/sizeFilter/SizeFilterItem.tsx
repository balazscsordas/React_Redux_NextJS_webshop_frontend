import { useAppDispatch, useAppSelector } from "@/app_redux/hooks";
import { AddSize, RemoveSize } from "@/features/categoryPageFiltersSlice";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface Props {
    name: string,
}

const SizeFilterItem = ({ name }: Props) => {

    const router = useRouter();
    const dispatch = useAppDispatch();
    const sizes = useAppSelector(state => state.categoryPageFilters.sizes);
    const [checked, setChecked] = useState(false);


    const handleChange = () => {
        if (!checked && !sizes.includes(name)) {
            dispatch(AddSize(name));
        } 
        else if (checked && sizes.includes(name)) {
            dispatch(RemoveSize(name));
        }
        setChecked(currState => !currState);
    }

    useEffect(() => {
        if(router.query.sizes?.includes(name)) {
            setChecked(true);
        };
    }, [])

    return (
        <section className="flex flex-row items-center my-2">
            <input 
                type="checkbox" 
                name={name}
                className="w-4 h-4 mr-4"
                checked={checked}
                onChange={handleChange}
            />
            <span>{name}</span>
        </section>
    )
}

export default SizeFilterItem;