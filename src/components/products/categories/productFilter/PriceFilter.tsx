import Slider from "@mui/material/Slider";
import { useState } from "react";
import FilterItemWrapper from "./FilterItemWrapper";

const marks = [
    {
      value: 0,
      label: '0',
    },
    {
      value: 100,
      label: '100$',
    },
  ];

const minDistance = 10;


const PriceFilter = () => {

    const [value, setValue] = useState<number[]>([0, 100]);

    const handleChange1 = (event: Event, newValue: number | number[], activeThumb: number, ) => {
        if (!Array.isArray(newValue)) {
          return;
        }
    
        if (activeThumb === 0) {
          setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
        } else {
          setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
        }
      };

    return (
        <FilterItemWrapper name="Price">
            <Slider
                className="max-w-[15rem] text-black ml-3"
                getAriaLabel={() => 'Minimum distance'}
                value={value}
                marks={marks}
                onChange={handleChange1}
                valueLabelDisplay="auto"
                disableSwap
                step={20}
                min={0}
                max={100}
            />
           
        </FilterItemWrapper>
    )
}

export default PriceFilter;