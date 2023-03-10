import { useAppSelector } from "@/app_redux/hooks";
import { BillingDetailsInterface } from "@/interfaces/checkout/BillingDetailsInterface";
import { Dispatch, SetStateAction } from "react";

interface Props {
    copyShippingDetails: boolean,
    setCopyShippingDetails: Dispatch<SetStateAction<boolean>>,
    setInputData: Dispatch<SetStateAction<BillingDetailsInterface>>,
}

const CopyShippingDetailsCheckbox = ({ copyShippingDetails, setCopyShippingDetails, setInputData }: Props) => {

    const shippingDetails = useAppSelector(state => state.shippingDetails.value);

    const handleChange = () => {
        setCopyShippingDetails(currentValue => !currentValue);
        !copyShippingDetails
            ? setInputData(shippingDetails)
            : setInputData({
                firstName: "",
                lastName: "",
                city: "",
                country: "",
                email: "",
                mobileNumber: "",
                postalCode: 0,
                streetAddress: "",
                aptSuiteUnit: "",
            })
    }

    return (
        <div className="flex flex-row items-center my-4">
            <input 
                type="checkbox" 
                checked={copyShippingDetails} 
                className="w-4 h-4"
                onChange={handleChange}
            />
            <span className="ml-4">Copy my shipping details</span>
        </div>
    )
}

export default CopyShippingDetailsCheckbox;