import { useAppSelector } from "@/app_redux/hooks";
import SummaryItem from "./SummaryItem";
import SummaryLayout from "./SummaryLayout";

const ShippingSummary = () => {

    const shippingDetails = useAppSelector(state => state.shippingDetails.value);

    return (
        <SummaryLayout title="Shipping details" href="/shipping">
            <SummaryItem name="Name" value={`${shippingDetails.firstName} ${shippingDetails.lastName}`}/>
            <SummaryItem name="Country" value={shippingDetails.country}/>
            <SummaryItem name="Postal code" value={shippingDetails.postalCode}/>
            <SummaryItem name="City" value={shippingDetails.city}/>
            <SummaryItem name="Address" value={shippingDetails.streetAddress}/>
        </SummaryLayout>
    )
}

export default ShippingSummary;