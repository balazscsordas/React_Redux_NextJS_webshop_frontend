import { Dispatch, SetStateAction } from "react";

interface Props {
    copyShippingDetails: boolean,
    setCopyShippingDetails: Dispatch<SetStateAction<boolean>>,
}

const CopyShippingDetailsCheckbox = ({ copyShippingDetails, setCopyShippingDetails }: Props) => {

    const handleChange = () => {
        setCopyShippingDetails(currentValue => !currentValue);
    }

    return (
        <div className="flex flex-row items-center ">
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