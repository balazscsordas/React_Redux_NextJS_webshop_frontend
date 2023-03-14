import { useAppSelector } from "@/app_redux/hooks";
import { BasicPrimaryButton } from "@/components/smallComponents/Buttons";
import { getTotalCartValue } from "@/utils/cart";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import Router from "next/router";
import { useState } from "react";
import CheckoutCartItem from "../orderSummary/CheckoutCartItem";
import { sendOrderDetails } from "./API/sendOrderDetails";
import SummaryLayout from "./SummaryLayout";

const CartSummary = () => {

    const cartProducts = useAppSelector(state => state.cartProducts.value);
    const shippingDetails = useAppSelector(state => state.shippingDetails.value);
    const billingDetails = useAppSelector(state => state.billingDetails.value);
    const paymentDetails = useAppSelector(state => state.paymentDetails.value);

    const [checked, setChecked] = useState(false);
    const [showUncheckedError, setShowUncheckedError] = useState(false);
    const deliveryFee = 0;

    const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (checked && paymentDetails) {
            const orderDetails = {
                shippingDetails,
                billingDetails,
                paymentDetails,
                cartProducts
            }
            const response = await sendOrderDetails(orderDetails);
            if (response.success == true) {
                Router.push("/success");
            }
        }
        else setShowUncheckedError(true)
    }

    const handleChange = () => {
        setChecked(currentState => !currentState);
    }
 
    return (
        <SummaryLayout title="Products" href="/cart">
            {cartProducts.map((product, index) => (
                <CheckoutCartItem 
                    key={index}
                    id={product.id}
                    name={product.name}
                    imageURL={product.imageURL}
                    quantity={product.quantity}
                    unitPrice={product.unitPrice}
                    currentStock={product.currentStock}
                    size={product.size}
                    volume={product.volume}
                />
            ))}
            <Box component="form" onSubmit={handleSubmit} className="border-t-2 border-gray-300">
                <div className="flex flex-row items-center justify-between my-4">
                    <p className="font-medium">Subtotal</p>
                    <span className="font-medium">{`${getTotalCartValue(cartProducts)}$`}</span>
                </div>
                <div className="flex flex-row items-center justify-between my-4 text-gray-500">
                    <p className="font-medium">Delivery fee</p>
                    <span>{deliveryFee}$</span>
                </div>
                <div className="flex flex-row items-center justify-between my-4">
                    <p className="font-medium">Total to pay</p>
                    <span className="font-medium">{`${getTotalCartValue(cartProducts)}$`}</span>
                </div>
                <div className="flex flex-row items-center justify-between">
                    <p className="font-medium">I have read and accept the terms and conditions.</p>
                    <input type="checkbox" onChange={ handleChange } checked={ checked } className="w-4 h-4"/>
                </div>
                <Collapse in={showUncheckedError} className="text-center text-red-600 my-4">
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