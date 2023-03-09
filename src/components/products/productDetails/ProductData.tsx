import { useAppDispatch, useAppSelector } from "@/app_redux/hooks";
import { Alert } from "@/components/smallComponents/Alerts";
import { AddToCartButton } from "@/components/smallComponents/Buttons";
import { addToCart } from "@/features/cartProductsSlice";
import { ProductInCartInterface } from "@/interfaces/ProductInterfaces";
import { useEffect, useState } from "react";
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
                quantity: quantity,
                currentStock: productData.currentStock,
                size: (productData.size ? productData.size : ""),
                volume: (productData.volume ? productData.volume : ""),
            };
            dispatch(addToCart(product));
            setShowSuccessAlert(true);
            setQuantity(1);
        }
    }

    // Sets the quantity to 1 everytime there is a new product.
    useEffect(() => {
        setQuantity(1);
    }, [productData])

    return (
        <>
            <Alert 
                open={showSuccessAlert}
                onClose={() => setShowSuccessAlert(false)}
                text="Product has been added to the cart."
                severity="success"
            />
            {productData &&
                <section className="basis-1/2">
                    <h2 className="font-medium my-4 sm:my-6">{productData.name}</h2>
                    <h4 className="font-medium">Price</h4>
                    <h3 className="mt-3 text-gray-500">${productData.unitPrice}</h3>
                    <StockChecker />
                    { sizeOptions.length > 0 && <SizeSelector /> }
                    { volumeOptions.length > 0 && <VolumeSelector /> }
                    { productData.currentStock > 0 && 
                        <div className="my-6 sm:my-12 flex flex-row">
                            <ProductQuantityChanger quantity={quantity} setQuantity={setQuantity} currentStock={productData.currentStock}/>
                            <AddToCartButton onClick={addToCartOnClick} text="Add to cart"/>
                        </div> 
                    }
                    <p className="my-6 sm:my-8">{productData.description}</p>
                    <ShippingInformation />
                </section>
            }
        </>
    )
}

export default ProductData;