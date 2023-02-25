import Image from "next/image";
import productImage from "../../../public/dogimageforbanner.webp";
import ClearIcon from '@mui/icons-material/Clear';
import IconButton from "@mui/material/IconButton";
import ProductQuantityChanger from "./ProductQuantityChanger";

interface Props {
    name: string,
}

const CartItem = ({ name }: Props) => {
    return (
        <section className="flex flex-row border-b-[1px] py-4 relative">
            <Image alt="product" src={productImage} width={100}/>
            <div className="flex flex-col ml-8">
                <h4>{ name }</h4>
                <ProductQuantityChanger currentQuantity={2} currentStock={8}/>
            </div>
            <IconButton className="absolute top-2 right-2">
                <ClearIcon />
            </IconButton>
        </section>
    )
}

export default CartItem;