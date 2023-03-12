import { useAppDispatch, useAppSelector } from "@/app_redux/hooks";
import { BasicPrimaryButton } from "@/components/smallComponents/Buttons";
import { setCategoryProductList } from "@/features/categoryDetailsSlice";
import { ProductListInterface } from "@/interfaces/ProductInterfaces";
import Collapse from "@mui/material/Collapse";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import AvailabilityFilter from "./availabilityFilter/AvailabilityFilter";
import PriceFilter from "./PriceFilter";
import SizeFilter from "./sizeFilter/SizeFilter";
import VolumeFilter from "./volumeFilter/VolumeFilter";

const ProductFilterBlock = () => {

    const dispatch = useAppDispatch();
    const categorySizeOptions = useAppSelector(state => state.categoryDetails.categorySizeOptions);
    const categoryVolumeOptions = useAppSelector(state => state.categoryDetails.categoryVolumeOptions);

    const onStock = useAppSelector(state => state.categoryPageFilters.onStock);
    const minPrice = useAppSelector(state => state.categoryPageFilters.minPrice);
    const maxPrice = useAppSelector(state => state.categoryPageFilters.maxPrice);
    const sizes = useAppSelector(state => state.categoryPageFilters.sizes);
    const volumes = useAppSelector(state => state.categoryPageFilters.volumes);

    const router = useRouter();

    const handleClick = () => {
        onStock && (router.query.onStock = onStock.toString());
        router.query.minPrice = minPrice.toString();
        maxPrice > 0 && (router.query.maxPrice = maxPrice.toString());
        (categorySizeOptions.length > 0 && sizes.length > 0) && (router.query.sizes = sizes.toString());
        (categoryVolumeOptions.length > 0 && volumes.length > 0) && (router.query.volumes = volumes.toString());
        router.push(router)
    }

    return (
        <section className="basis-1 md:basis-1/4">
            <section className="flex flex-col sm:flex-row md:flex-col md:sticky md:top-20 flex-1 justify-between">
                <AvailabilityFilter />
                <PriceFilter />
                { categorySizeOptions.length > 0 && <SizeFilter /> }
                { categoryVolumeOptions.length > 0 && <VolumeFilter /> }
                <BasicPrimaryButton text="Apply" onClick={handleClick}/>
            </section>
            
        </section>

    )
}

export default ProductFilterBlock;