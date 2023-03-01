import { useAppSelector } from "@/app_redux/hooks";
import SummaryItem from "./SummaryItem";
import SummaryLayout from "./SummaryLayout";

const BillingSummary = () => {

    const billingDetails = useAppSelector(state => state.billingDetails.value);

    return (
        <SummaryLayout title="Billing details" href="/billing">
            <SummaryItem name="Name" value={`${billingDetails.firstName} ${billingDetails.lastName}`}/>
            <SummaryItem name="Country" value={billingDetails.country}/>
            <SummaryItem name="Postal code" value={billingDetails.postalCode}/>
            <SummaryItem name="City" value={billingDetails.city}/>
            <SummaryItem name="Address" value={billingDetails.streetAddress}/>
        </SummaryLayout>
    )
}

export default BillingSummary;