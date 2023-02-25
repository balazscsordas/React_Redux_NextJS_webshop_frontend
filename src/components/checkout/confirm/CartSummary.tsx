import { BasicPrimaryButton } from "@/components/smallComponents/Buttons";
import Box from "@mui/material/Box";
import Router from "next/router";
import { useState } from "react";
import CheckoutCartItem from "../orderSummary/CheckoutCartItem";
import SummaryLayout from "./SummaryLayout";

const CartSummary = () => {

    const [checked, setChecked] = useState(false);

    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (checked) {
            console.log("hehe");
            Router.push("/success");
        }
    }

    const handleChange = () => {
        setChecked(currentState => !currentState);
    }
 
    return (
        <SummaryLayout title="Products" href="/cart">
            <CheckoutCartItem name="Organic Baked Bites - Chicken" currentQuantity={2} currentStock={8} unitPrice={20}/>
            <CheckoutCartItem name="Organic Baked Bites - Chicken" currentQuantity={2} currentStock={8} unitPrice={20}/>
            <CheckoutCartItem name="Organic Baked Bites - Chicken" currentQuantity={2} currentStock={8} unitPrice={20}/>
            <Box component="form" onSubmit={handleSubmit} className="border-t-2 border-gray-300">
                <div className="flex flex-row items-center justify-between my-4">
                    <p className="font-medium">Subtotal</p>
                    <span className="font-medium">50$</span>
                </div>
                <div className="flex flex-row items-center justify-between my-4 text-gray-500">
                    <p className="font-medium">Delivery fee</p>
                    <span>0$</span>
                </div>
                <div className="flex flex-row items-center justify-between my-4">
                    <p className="font-medium">Total to pay</p>
                    <span className="font-medium">50$</span>
                </div>
                <div className="flex flex-row items-center justify-between">
                    <p className="font-medium">I have read and accept the terms and conditions.</p>
                    <input type="checkbox" onChange={ handleChange } checked={ checked } className="w-4 h-4"/>
                </div>
                <div className="mt-6 text-center">
                    <BasicPrimaryButton text="Place order" type="submit"/>
                </div>
            </Box>
            
        </SummaryLayout>
    )
}

export default CartSummary;