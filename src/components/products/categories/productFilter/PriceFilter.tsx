import { useAppSelector } from "@/app_redux/hooks";
import { getMaxPrice, getMinPrice } from "@/utils/priceFilter";
import Slider from "@mui/material/Slider";
import { useState } from "react";
import FilterItemWrapper from "./FilterItemWrapper";

const PriceFilter = () => {

  const categoryProductList = useAppSelector(state => state.categoryDetails.categoryProductList);
  const minPrice = getMinPrice(categoryProductList);
  const maxPrice = getMaxPrice(categoryProductList);
  const step = maxPrice - minPrice / 10;
  const minDistance = 20;

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
          setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
        } else {
          setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
        }
      };

    return (
        <FilterItemWrapper name="Price">
            <Slider
                className="max-w-[70%] text-black mx-auto flex "
                getAriaLabel={() => 'Minimum distance'}
                value={value}
                marks={marks}
                onChange={handleChange}
                valueLabelDisplay="auto"
                disableSwap
                step={10}
                min={minPrice}
                max={maxPrice}
            />
           
        </FilterItemWrapper>
    )
}

export default PriceFilter;