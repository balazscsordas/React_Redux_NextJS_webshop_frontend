import { useAppSelector } from "@/app_redux/hooks";
import SummaryItem from "./SummaryItem";
import SummaryLayout from "./SummaryLayout";

const PaymentSummary = () => {

    const paymentMethod = "creditCard"

    const chosenPayment = useAppSelector(state => state.paymentDetails);

    return (
        <SummaryLayout title="Payment details" href="/payment">
            <SummaryItem name="Payment method" value={chosenPayment.value ? chosenPayment.value?.name : ""}/>
        </SummaryLayout>
    )
}

export default PaymentSummary;