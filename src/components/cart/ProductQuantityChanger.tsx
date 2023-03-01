import { useEffect, useState } from "react";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import IconButton from "@mui/material/IconButton";
import { useAppDispatch, useAppSelector } from "@/app_redux/hooks";
import { changeProductQuantity } from "@/features/cartProductsSlice";

interface Props {
    productId: number,
    currentStock: number,
    currentQuantity: number,
}

const ProductQuantityChanger = ({ currentStock, currentQuantity, productId }: Props) => {

    const cartProducts = useAppSelector(state => state.cartProducts);
    const dispatch = useAppDispatch();

    const [quantity, setQuantity] = useState(currentQuantity);

    const increaseQuantity = () => {
        if (quantity < currentStock) setQuantity(currQuantity => currQuantity + 1)
    }

    const decreaseQuantity = () => {
        if (quantity > 1) setQuantity(currQuantity => currQuantity - 1)
    }

    useEffect(() => {
        dispatch(changeProductQuantity({productId: productId, newQuantity: quantity}));
    }, [quantity])

    return (
        <section className="flex w-32 flex-row items-center justify-between border rounded-full mt-auto">
            <IconButton onClick={decreaseQuantity}>
                <ChevronLeftIcon fontSize="small"/>
            </IconButton>
            <span className="text-lg mx-2">{ quantity }</span>
            <IconButton onClick={increaseQuantity}>
                <ChevronRightIcon fontSize="small"/>
            </IconButton>
        </section>
    )
}

export default ProductQuantityChanger;