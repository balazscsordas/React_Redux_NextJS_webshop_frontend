import { Dispatch, SetStateAction } from "react";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import IconButton from "@mui/material/IconButton";

interface Props {
    currentStock: number,
    quantity: number,
    setQuantity: Dispatch<SetStateAction<number>>,
}

const ProductQuantityChanger = ({ currentStock, quantity, setQuantity }: Props) => {

    const increaseQuantity = () => {
        if (quantity < currentStock) setQuantity(currQuantity => currQuantity + 1)
    }

    const decreaseQuantity = () => {
        if (quantity > 1) setQuantity(currQuantity => currQuantity - 1)
    }

    return (
        <section className="flex flex-row items-center border rounded-full">
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