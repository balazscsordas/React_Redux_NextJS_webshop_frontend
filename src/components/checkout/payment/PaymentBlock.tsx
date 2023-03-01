import { PaymentOptionInterface } from "@/interfaces/PaymentInterface";
import CheckoutProgressbar from "../checkoutProgressbar/CheckoutProgressbar";
import OrderSummaryBlock from "../orderSummary/OrderSummaryBlock";
import PaymentInputs from "./PaymentInputs";

interface Props {
    paymentOptions: PaymentOptionInterface[]
}

const PaymentBlock = ({ paymentOptions }: Props) => {
    return (
        <section>
            <CheckoutProgressbar status1='completed' status2="completed" status3="active"/>
            <section className="flex flex-col lg:flex-row">
                <PaymentInputs paymentOptions={paymentOptions}/>
                <OrderSummaryBlock />
            </section>
        </section>
    )
}

export default PaymentBlock;