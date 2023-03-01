import { useAppSelector } from "@/app_redux/hooks";
import { BasicPrimaryButton } from "@/components/smallComponents/Buttons";
import { getTotalCartValue } from "@/utils/cart";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import Router from "next/router";
import { useRef, useState } from "react";
import CheckoutCartItem from "../orderSummary/CheckoutCartItem";
import SummaryLayout from "./SummaryLayout";

const CartSummary = () => {

    const cartProducts = useAppSelector(state => state.cartProducts);

    const [checked, setChecked] = useState(false);
    const [showUncheckedError, setShowUncheckedError] = useState(false);
    const deliveryFee = 0;

    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (checked) Router.push("/success");
        else setShowUncheckedError(true)
    }

    const handleChange = () => {
        setChecked(currentState => !currentState);
    }
 
    return (
        <SummaryLayout title="Products" href="/cart">
            {cartProducts.value.map((product, index) => (
                <CheckoutCartItem 
                    key={index}
                    id={product.id}
                    productName={product.productName}
                    productQuantity={product.productQuantity}
                    productUnitPrice={product.productUnitPrice}
                    productCurrentStock={product.productCurrentStock}
                    productSize={product.productSize}
                    productVolume={product.productVolume}
                />
            ))}
            <Box component="form" onSubmit={handleSubmit} className="border-t-2 border-gray-300">
                <div className="flex flex-row items-center justify-between my-4">
                    <p className="font-medium">Subtotal</p>
                    <span className="font-medium">{`${getTotalCartValue(cartProducts.value)}$`}</span>
                </div>
                <div className="flex flex-row items-center justify-between my-4 text-gray-500">
                    <p className="font-medium">Delivery fee</p>
                    <span>{deliveryFee}$</span>
                </div>
                <div className="flex flex-row items-center justify-between my-4">
                    <p className="font-medium">Total to pay</p>
                    <span className="font-medium">{`${getTotalCartValue(cartProducts.value)}$`}</span>
                </div>
                <div className="flex flex-row items-center justify-between">
                    <p className="font-medium">I have read and accept the terms and conditions.</p>
                    <input type="checkbox" onChange={ handleChange } checked={ checked } className="w-4 h-4"/>
                </div>
                <Collapse in={showUncheckedError} className="text-center text-red-600">
                    <p>You have to accept the terms and conditions.</p>
                </Collapse>
                <div className="mt-6 text-center">
                    <BasicPrimaryButton text="Place order" type="submit"/>
                </div>
            </Box>
            
        </SummaryLayout>
    )
}

export default CartSummary;