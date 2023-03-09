import CheckoutProgressbar from "../checkoutProgressbar/CheckoutProgressbar";
import OrderSummaryBlock from "../orderSummary/OrderSummaryBlock";
import ShippingInputs from "./ShippingInputs";

const ShippingBlock = () => {
    return (
        <section>
            <CheckoutProgressbar status1='active'/>
            <section className="flex flex-col lg:flex-row px-4">
                <ShippingInputs />
                <OrderSummaryBlock />
            </section>
        </section>
    )
}

export default ShippingBlock;