import Image from "next/image";
import productImage from "../../../public/dogimageforbanner.webp";
import ClearIcon from '@mui/icons-material/Clear';
import IconButton from "@mui/material/IconButton";
import ProductQuantityChanger from "./ProductQuantityChanger";
import { ProductInCartInterface } from "@/interfaces/ProductInterfaces";
import { useAppDispatch } from "@/app_redux/hooks";
import { removeFromCart } from "@/features/cartProductsSlice";


const CartItem = ({ id, name, currentStock, imageURL, quantity, size, volume }: ProductInCartInterface) => {

    const dispatch = useAppDispatch();

    const removeProductFromCart = () => {
        dispatch(removeFromCart(id))
    }

    return (
        <section className="flex flex-row border-b-[1px] py-4 relative">
            <Image alt="product" loading="eager" src={imageURL} width={100} height={100}/>
            <div className="flex flex-col ml-8">
                <h4>{ name }</h4>
                {size && <p className="my-2">Size: {size}</p>}
                {volume && <p className="my-2">Size: {volume}</p>}
                <ProductQuantityChanger 
                    productId={id} 
                    currentQuantity={quantity} 
                    currentStock={currentStock}
                />
            </div>
            <IconButton className="absolute top-2 right-2" onClick={removeProductFromCart}>
                <ClearIcon />
            </IconButton>
        </section>
    )
}

export default CartItem;