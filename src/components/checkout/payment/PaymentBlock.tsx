import CheckoutProgressbar from "../checkoutProgressbar/CheckoutProgressbar";
import OrderSummaryBlock from "../orderSummary/OrderSummaryBlock";
import PaymentInputs from "./PaymentInputs";

const PaymentBlock = () => {
    return (
        <section>
            <CheckoutProgressbar status1='completed' status2="completed" status3="active"/>
            <section className="flex flex-col lg:flex-row">
                <PaymentInputs />
                <OrderSummaryBlock />
            </section>
        </section>
    )
}

export default PaymentBlock;