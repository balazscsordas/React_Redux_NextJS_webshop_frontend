import { BillingDetailsInterface } from "@/interfaces/checkout/BillingDetailsInterface";
import { PaymentOptionInterface } from "@/interfaces/checkout/PaymentInterface";
import { ShippingDetailsInterface } from "@/interfaces/checkout/ShippingDetailsInterface";
import { ProductInCartInterface } from "@/interfaces/ProductInterfaces";
import axios from "axios";

interface Props {
    shippingDetails: ShippingDetailsInterface,
    billingDetails: BillingDetailsInterface,
    paymentDetails: PaymentOptionInterface,
    cartProducts: ProductInCartInterface[]
}

export const sendOrderDetails = async (orderDetails: Props) => {
    const url = `${process.env.NEXT_PUBLIC_BASE_URL_SERVER}/api/Order/PostOrderDetails`;
    const params = {orderDetails: orderDetails};
    try {
        const response = await axios.post(url, params);
        console.log(orderDetails);
        return response.data.success;
    }
    catch (err) {
        console.log(err);
        err instanceof Error && console.log(err.message);
    }
}