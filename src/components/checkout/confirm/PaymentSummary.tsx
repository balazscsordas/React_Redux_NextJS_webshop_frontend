import SummaryItem from "./SummaryItem";
import SummaryLayout from "./SummaryLayout";

const PaymentSummary = () => {

    const paymentMethod = "creditCard"

    return (
        <SummaryLayout title="Payment details" href="/payment">
            <SummaryItem name="Payment method" value={paymentMethod === 'creditCard' ? 'Credit card' : 'Cash on delivery'}/>
        </SummaryLayout>
    )
}

export default PaymentSummary;