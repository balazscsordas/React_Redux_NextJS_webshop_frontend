import Collapse from "@mui/material/Collapse";
import { ReactNode, useState } from "react";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

interface Props {
    name: string,
    children: ReactNode,
}

const FilterItemWrapper = ({ name, children }: Props) => {

    const [showFilter, setShowFilter] = useState(false);

    return (
        <section className="p-2 md:p-4 flex-1">
            <div className="my-1 md:mb-3 flex flex-row items-center cursor-pointer" onClick={() => setShowFilter(currentStage => !currentStage)}>
                <h4 className="font-semibold">{ name }</h4>
                <KeyboardArrowUpIcon className={`ml-2 transition-all ${!showFilter && 'rotate-180'}`}/>
            </div>
            <Collapse in={showFilter}>
                { children }
            </Collapse>
        </section>
    )
}

export default FilterItemWrapper;