import { useAppDispatch, useAppSelector } from "@/app_redux/hooks";
import { BasicPrimaryButton } from "@/components/smallComponents/Buttons";
import { OneLineNonReqInput, OneLineReqInput } from "@/components/smallComponents/InputFields";
import TwoColInputBlock from "@/components/smallComponents/TwoColInputBlock";
import { setBillingDetails } from "@/features/billingDetailsSlice";
import { BillingDetailsInterface } from "@/interfaces/checkout/BillingDetailsInterface";
import Box from "@mui/material/Box";
import Router from "next/router";
import { useState } from "react";
import BackToPreviousStage from "../BackToPreviousStage";
import CopyShippingDetailsCheckbox from "./CopyShippingDetailsCheckbox";

const BillingInputs = () => {

    // Gets the state from Redux
    const billingDetails = useAppSelector(state => state.billingDetails.value);
    const dispatch = useAppDispatch();

    const [copyShippingDetails, setCopyShippingDetails] = useState(false);
    const [inputData, setInputData] = useState<BillingDetailsInterface>(billingDetails)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === 'postalCode') {
            setInputData(prevValues => {
                return {
                    ...prevValues,
                    postalCode: parseInt(value),
                }
            }) 
        } else {
            setInputData(prevValues => {
                return {
                    ...prevValues,
                    [name]: value,
                }
            })
        }
    }

    const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        dispatch(setBillingDetails(inputData));
        Router.push("/payment");
    }

    return (
        <section className="flex-1">
            <BackToPreviousStage text="back to shipping details" href="/shipping"/>
            <section className="mb-4">
                <h2 className="py-4 font-semibold border-b-2">Billing Details</h2>
                <Box component="form" onSubmit={handleSubmit} className="mt-4">
                   <CopyShippingDetailsCheckbox copyShippingDetails={copyShippingDetails} setCopyShippingDetails={setCopyShippingDetails} setInputData={setInputData}/>
                   <TwoColInputBlock 
                        firstInput={ <OneLineReqInput onChange={handleChange} label="First Name" value={inputData.firstName} nameVal="firstName" autoComplete="given-name"/> }
                        secondInput={ <OneLineReqInput onChange={handleChange} label="Last Name" value={inputData.lastName} nameVal="lastName" autoComplete="family-name"/> }
                    />
                    <TwoColInputBlock 
                        firstInput={ <OneLineReqInput onChange={handleChange} label="Email Address" value={inputData.email} nameVal="email" autoComplete="email"/> }
                        secondInput={ <OneLineReqInput onChange={handleChange} label="Mobile Number" value={inputData.mobileNumber} nameVal="mobileNumber" autoComplete="tel"/> }
                    />
                    <OneLineReqInput onChange={handleChange} label="Street Address" value={inputData.streetAddress} nameVal="streetAddress" autoComplete="street-address"/>
                    <TwoColInputBlock 
                        firstInput={ <OneLineReqInput onChange={handleChange} label="Country" value={inputData.country} nameVal="country" autoComplete="country-name"/> }
                        secondInput={ <OneLineReqInput onChange={handleChange} label="City" value={inputData.city} nameVal="city" autoComplete="address-level2"/> }
                    />
                    <TwoColInputBlock 
                        firstInput={ <OneLineReqInput onChange={handleChange} label="Postal code" value={inputData.postalCode === 0 ? "" : inputData.postalCode} nameVal="postalCode" autoComplete="postal-code"/> }
                        secondInput={ <OneLineNonReqInput onChange={handleChange} label="Apt / Suite / Unit (optional)" value={inputData.aptSuiteUnit} nameVal="aptSuiteUnit"/> }
                    />
                    <div className="my-4">
                        <BasicPrimaryButton type="submit" text="Continue"/>
                    </div>
                </Box>
            </section>
        </section>
    )
}

export default BillingInputs;