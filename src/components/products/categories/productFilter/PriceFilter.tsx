import { useAppDispatch, useAppSelector } from "@/app_redux/hooks";
import { setMaxPrice, setMinPrice } from "@/features/categoryPageFiltersSlice";
import { getMaxPrice, getMinPrice, getStep } from "@/utils/priceFilter";
import Slider from "@mui/material/Slider";
import { useState } from "react";
import FilterItemWrapper from "./FilterItemWrapper";

const PriceFilter = () => {

  const dispatch = useAppDispatch();

  const categoryProductList = useAppSelector(state => state.categoryDetails.categoryProductList);
  const minPrice = getMinPrice(categoryProductList);
  const maxPrice = getMaxPrice(categoryProductList);
  const step = getStep(categoryProductList);
  const minDistance = step;

  const marks = [
    {
      value: minPrice,
      label: `$${minPrice}`,
    },
    {
      value: maxPrice,
      label: `$${maxPrice}`,
    },
  ];
  

  const [value, setValue] = useState<number[]>([minPrice, maxPrice]);

    const handleChange = (event: Event, newValue: number | number[], activeThumb: number, ) => {
        if (!Array.isArray(newValue)) {
          return;
        }
        if (activeThumb === 0) {
          const newValuePair = [Math.min(newValue[0], value[1] - minDistance), value[1]];
          setValue(newValuePair);
          dispatch(setMinPrice(newValuePair[0]))
        } else {
          const newValuePair = [value[0], Math.max(newValue[1], value[0] + minDistance)];
          setValue(newValuePair);
          dispatch(setMaxPrice(newValuePair[1]));
        }
      };

    return (
        <FilterItemWrapper name="Price">
            <Slider
                className="max-w-[70%] text-black md:mx-auto md:flex "
                getAriaLabel={() => 'Minimum distance'}
                value={value}
                marks={marks}
                onChange={handleChange}
                valueLabelDisplay="auto"
                disableSwap
                step={step}
                min={minPrice}
                max={maxPrice}
            />
           
        </FilterItemWrapper>
    )
}

export default PriceFilter;