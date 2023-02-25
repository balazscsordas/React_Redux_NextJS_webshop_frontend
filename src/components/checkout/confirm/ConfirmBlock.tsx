import CheckoutProgressbar from "../checkoutProgressbar/CheckoutProgressbar";
import BillingSummary from "./BillingSummary";
import CartSummary from "./CartSummary";
import PaymentSummary from "./PaymentSummary";
import ShippingSummary from "./ShippingSummary";

const ConfirmBlock = () => {
    return (
        <section className="mx-4">
            <CheckoutProgressbar status1='completed' status2="completed" status3="completed" status4="active"/>
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 mt-8">
                <ShippingSummary />
                <BillingSummary />
                <PaymentSummary />
            </section>
            <div className="mt-6">
                <CartSummary />
            </div>
        </section>
    )
}

export default ConfirmBlock;