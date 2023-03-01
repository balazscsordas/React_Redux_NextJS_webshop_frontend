import { BasicPrimaryButton } from "@/components/smallComponents/Buttons";
import { OneLineNonReqInput, OneLineReqInput } from "@/components/smallComponents/InputFields";
import TwoColInputBlock from "@/components/smallComponents/TwoColInputBlock";
import { ShippingDetailsInterface } from "@/interfaces/ShippingDetailsInterface";
import { useState } from "react";
import BackToPreviousStage from "../BackToPreviousStage";
import { useAppDispatch, useAppSelector } from "@/app_redux/hooks";
import Box from "@mui/material/Box";
import Router from "next/router";
import { setShippingDetails } from "@/features/shippingDetailsSlice";

const ShippingInputs = () => {

    // Gets the state from Redux
    const shippingDetails = useAppSelector(state => state.shippingDetails.value);
    const dispatch = useAppDispatch();

    const [inputData, setInputData] = useState<ShippingDetailsInterface>(shippingDetails)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInputData(prevValues => {
            return {
                ...prevValues,
                [name]: value,
            }
        })
    }

    const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        dispatch(setShippingDetails(inputData));
        Router.push("/billing");
    }

    return (
        <section className="flex-1 m-4">
            <BackToPreviousStage text="back to cart" href="/cart"/>
            <section className="mb-4">
                <h2 className="py-4 font-semibold border-b-2">Shipping Details</h2>
                <Box component="form" onSubmit={handleSubmit} className="mt-4">
                    <TwoColInputBlock 
                        firstInput={ <OneLineReqInput onChange={handleChange} label="First Name" value={inputData.firstName} nameVal="firstName" autoComplete="given-name"/> }
                        secondInput={ <OneLineReqInput onChange={handleChange} label="Last Name" value={inputData.lastName} nameVal="lastName" autoComplete="family-name"/> }
                    />
                    <TwoColInputBlock 
                        firstInput={ <OneLineReqInput onChange={handleChange} label="Email Address" value={inputData.email} nameVal="email" autoComplete="email"/> }
                        secondInput={ <OneLineReqInput onChange={handleChange} label="Mobile Number" value={inputData.mobile} nameVal="mobile" autoComplete="tel"/> }
                    />
                    <OneLineReqInput onChange={handleChange} label="Street Address" value={inputData.streetAddress} nameVal="streetAddress" autoComplete="street-address"/>
                    <TwoColInputBlock 
                        firstInput={ <OneLineReqInput onChange={handleChange} label="Country" value={inputData.country} nameVal="country" autoComplete="country-name"/> }
                        secondInput={ <OneLineReqInput onChange={handleChange} label="City" value={inputData.city} nameVal="city" autoComplete="address-level2"/> }
                    />
                    <TwoColInputBlock 
                        firstInput={ <OneLineReqInput onChange={handleChange} label="Postal code" value={inputData.postalCode} nameVal="postalCode" autoComplete="postal-code"/> }
                        secondInput={ <OneLineNonReqInput onChange={handleChange} label="Apt / Suite / Unit (optional)" value={inputData.aptSuiteUnit} nameVal="aptSuiteUnit"/> }
                    />
                    <BasicPrimaryButton type="submit" text="Continue"/>
                </Box>
            </section>
        </section>
    )
}

export default ShippingInputs;