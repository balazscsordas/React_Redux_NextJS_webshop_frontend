import { useAppDispatch } from "@/app_redux/hooks";
import { Alert } from "@/components/smallComponents/Alerts";
import { AddToCartButton } from "@/components/smallComponents/Buttons";
import { addToCart } from "@/features/cartProductsSlice";
import { ProductInCartInterface } from "@/interfaces/ProductInCartInterface";
import { useState } from "react";
import SizeSelector from "./productDetailsSelectors/SizeSelector";
import VolumeSelector from "./productDetailsSelectors/VolumeSelector";
import ProductQuantityChanger from "./ProductQuantityChanger";
import ShippingInformation from "./ShippingInformation";
import StockChecker from "./StockChecker";

interface Props {
    id: number,
    productName: string,
    productQuantity: number,
    productCurrentStock: number,
    productUnitPrice: number,
    productSize?: string,
    productVolume?: string,
    description: string,
}

const ProductData = ({ id, productName, productUnitPrice, productQuantity, productVolume, productSize, description, productCurrentStock }: Props) => {

    const dispatch = useAppDispatch();

    const [showSuccessAlert, setShowSuccessAlert] = useState(false);
    const [quantity, setQuantity] = useState(1);

    const addToCartOnClick = () => {
        const product: ProductInCartInterface = {
            id,
            productName,
            productUnitPrice,
            productQuantity: quantity,
            productCurrentStock,
            ...(productSize && {productSize}),
            ...(productVolume && {productVolume})
        };
        dispatch(addToCart(product));
        setShowSuccessAlert(true);
    }

    return (
        <>
            <Alert 
                open={showSuccessAlert}
                onClose={() => setShowSuccessAlert(false)}
                text="Product has been added to the cart."
                severity="success"
            />
            <section className="basis-1/2 p-4">
                <h2 className="font-medium my-6">{ productName }</h2>
                <h4 className="font-medium">Price</h4>
                <h3 className="mt-3 text-gray-500">${ productUnitPrice }</h3>
                <StockChecker currentStock={ productCurrentStock }/>
                <SizeSelector />
                <VolumeSelector />
                <div className="my-12 flex flex-row">
                    <ProductQuantityChanger quantity={quantity} setQuantity={setQuantity} currentStock={productCurrentStock}/>
                    <AddToCartButton onClick={addToCartOnClick} text="Add to cart"/>
                </div>
                <p>{ description }</p>
                <ShippingInformation />
            </section>
        </>
    )
}

export default ProductData;