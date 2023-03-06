import { useAppDispatch, useAppSelector } from "@/app_redux/hooks";
import { Alert } from "@/components/smallComponents/Alerts";
import { AddToCartButton } from "@/components/smallComponents/Buttons";
import { addToCart } from "@/features/cartProductsSlice";
import { ProductInCartInterface } from "@/interfaces/ProductInterfaces";
import { useState } from "react";
import SizeSelector from "./productDetailsSelectors/SizeSelector";
import VolumeSelector from "./productDetailsSelectors/VolumeSelector";
import ProductQuantityChanger from "./ProductQuantityChanger";
import ShippingInformation from "./ShippingInformation";
import StockChecker from "./StockChecker";

const ProductData = () => {

    const productData = useAppSelector(state => state.productDetails.productData);
    const sizeOptions = useAppSelector(state => state.productDetails.sizeOptions);
    const volumeOptions = useAppSelector(state => state.productDetails.volumeOptions);
    const dispatch = useAppDispatch();

    const [showSuccessAlert, setShowSuccessAlert] = useState(false);
    const [quantity, setQuantity] = useState(1);

    const addToCartOnClick = () => {
        if (productData) {
            const product: ProductInCartInterface = {
                id: productData.id,
                name: productData.name,
                imageURL: productData.imageURL,
                unitPrice: productData.unitPrice,
                quantity,
                currentStock: productData.currentStock,
                size: (productData.size ? productData.size : ""),
                volume: (productData.volume ? productData.volume : ""),
            };
            dispatch(addToCart(product));
            setShowSuccessAlert(true);
        }
    }

    return (
        <>
            <Alert 
                open={showSuccessAlert}
                onClose={() => setShowSuccessAlert(false)}
                text="Product has been added to the cart."
                severity="success"
            />
            {productData &&
                <section className="basis-1/2 p-4">
                    <h2 className="font-medium my-6">{productData.name}</h2>
                    <h4 className="font-medium">Price</h4>
                    <h3 className="mt-3 text-gray-500">${productData.unitPrice}</h3>
                    <StockChecker currentStock={productData.currentStock}/>
                    { sizeOptions.length > 0 && <SizeSelector /> }
                    { volumeOptions.length > 0 && <VolumeSelector /> }
                    <div className="my-12 flex flex-row">
                        <ProductQuantityChanger quantity={quantity} setQuantity={setQuantity} currentStock={productData.currentStock}/>
                        <AddToCartButton onClick={addToCartOnClick} text="Add to cart"/>
                    </div>
                    <p>{productData.description}</p>
                    <ShippingInformation />
                </section>
            }
        </>
    )
}

export default ProductData;