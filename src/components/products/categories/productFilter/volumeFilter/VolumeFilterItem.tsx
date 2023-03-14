import { useAppDispatch, useAppSelector } from "@/app_redux/hooks";
import { AddVolume, RemoveVolume } from "@/features/categoryPageFiltersSlice";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface Props {
    name: string,
}

const VolumeFilterItem = ({ name }: Props) => {

    const router = useRouter();
    const dispatch = useAppDispatch();
    const volumes = useAppSelector(state => state.categoryPageFilters.volumes);
    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        if (!checked && !volumes.includes(name)) {
            dispatch(AddVolume(name));
        } 
        else if (checked && volumes.includes(name)) {
            dispatch(RemoveVolume(name));
        }
        setChecked(currState => !currState);
    }

    useEffect(() => {
        if(router.query.volumes?.includes(name)) {
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

export default VolumeFilterItem;