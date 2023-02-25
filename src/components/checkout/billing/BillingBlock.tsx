import CheckoutProgressbar from "../checkoutProgressbar/CheckoutProgressbar";
import OrderSummaryBlock from "../orderSummary/OrderSummaryBlock";
import BillingInputs from "./BillingInputs";

const BillingBlock = () => {
    return (
        <section>
            <CheckoutProgressbar status1='completed' status2="active"/>
            <section className="flex flex-col lg:flex-row">
                <BillingInputs />
                <OrderSummaryBlock />
            </section>
        </section>
    )
}

export default BillingBlock;