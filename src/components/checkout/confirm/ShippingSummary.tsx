import SummaryItem from "./SummaryItem";
import SummaryLayout from "./SummaryLayout";

const ShippingSummary = () => {

    const firstName = "Balázs";
    const lastName = "Csordás";
    const shippingCountry = "Hungary";
    const shippingCity = "Győr";
    const shippingPostalCode = "9027";
    const shippintAddress = "Stadion utca 15";

    return (
        <SummaryLayout title="Shipping details" href="/shipping">
            <SummaryItem name="Name" value={`${firstName} ${lastName}`}/>
            <SummaryItem name="Country" value={shippingCountry}/>
            <SummaryItem name="Postal code" value={shippingPostalCode}/>
            <SummaryItem name="City" value={shippingCity}/>
            <SummaryItem name="Address" value={shippintAddress}/>
        </SummaryLayout>
    )
}

export default ShippingSummary;