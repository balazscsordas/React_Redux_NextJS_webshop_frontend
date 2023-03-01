import CheckoutProgressbar from "../checkoutProgressbar/CheckoutProgressbar";
import Link from "next/link";
import { BasicPrimaryButton } from "@/components/smallComponents/Buttons";
import { useEffect } from "react";
import { useAppDispatch } from "@/app_redux/hooks";
import { clearCart } from "@/features/cartProductsSlice";
import { clearShippingDetails } from "@/features/shippingDetailsSlice";
import { clearBillingDetails } from "@/features/billingDetailsSlice";
import { clearChosenPayment } from "@/features/paymentDetailsSlice";

const SuccessBlock = () => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(clearChosenPayment());
        dispatch(clearBillingDetails());
        dispatch(clearShippingDetails());
        dispatch(clearCart());
    }, [])

    return (
        <section>
            <CheckoutProgressbar status1='completed' status2="completed" status3="completed" status4="completed"/>
            <section className="grid justify-center items-center m-auto text-center mt-20">
                <h2 className="font-bold mb-4 inline-block">Thank you for the order!</h2>
                <Link href='/' passHref className="mt-4">
                    <BasicPrimaryButton text="Back to homepage"/>
                </Link>
            </section>
        </section>
    )
}

export default SuccessBlock;