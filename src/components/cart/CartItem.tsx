import Image from "next/image";
import productImage from "../../../public/dogimageforbanner.webp";
import ClearIcon from '@mui/icons-material/Clear';
import IconButton from "@mui/material/IconButton";
import ProductQuantityChanger from "./ProductQuantityChanger";
import { ProductInCartInterface } from "@/interfaces/ProductInCartInterface";
import { useAppDispatch } from "@/app_redux/hooks";
import { removeFromCart } from "@/features/cartProductsSlice";


const CartItem = ({ id, productName, productCurrentStock, productQuantity, productUnitPrice, productSize, productVolume }: ProductInCartInterface) => {

    const dispatch = useAppDispatch();

    const removeProductFromCart = () => {
        dispatch(removeFromCart(id))
    }

    return (
        <section className="flex flex-row border-b-[1px] py-4 relative">
            <Image alt="product" loading="eager" src={productImage} width={100}/>
            <div className="flex flex-col ml-8">
                <h4>{ productName }</h4>
                {productSize && <p>Size: {productSize}</p>}
                {productVolume && <p>Size: {productVolume}</p>}
                <ProductQuantityChanger 
                    productId={id} 
                    currentQuantity={productQuantity} 
                    currentStock={productCurrentStock}
                />
            </div>
            <IconButton className="absolute top-2 right-2" onClick={removeProductFromCart}>
                <ClearIcon />
            </IconButton>
        </section>
    )
}

export default CartItem;