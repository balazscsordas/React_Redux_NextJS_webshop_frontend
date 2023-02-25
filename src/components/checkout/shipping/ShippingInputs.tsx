import { BasicPrimaryButton } from "@/components/smallComponents/Buttons";
import { OneLineNonReqInput, OneLineReqInput } from "@/components/smallComponents/InputFields";
import TwoColInputBlock from "@/components/smallComponents/TwoColInputBlock";
import Link from "next/link";
import BackToPreviousStage from "../BackToPreviousStage";

const ShippingInputs = () => {
    return (
        <section className="flex-1 m-4">
            <BackToPreviousStage text="back to cart" href="/cart"/>
            <section className="mb-4">
                <h2 className="py-4 font-semibold border-b-2">Shipping Details</h2>
                <section className="mt-4">
                    <TwoColInputBlock 
                        firstInput={ <OneLineReqInput label="First Name" autoComplete="firstName"/> }
                        secondInput={ <OneLineReqInput label="Last Name" autoComplete="lastName"/> }
                    />
                    <TwoColInputBlock 
                        firstInput={ <OneLineReqInput label="Email Address" autoComplete="email"/> }
                        secondInput={ <OneLineReqInput label="Mobile Number" autoComplete="tel"/> }
                    />
                    <OneLineReqInput label="Street Address" autoComplete="street"/>
                    <TwoColInputBlock 
                        firstInput={ <OneLineReqInput label="Country" autoComplete="country"/> }
                        secondInput={ <OneLineReqInput label="City" autoComplete="city"/> }
                    />
                    <TwoColInputBlock 
                        firstInput={ <OneLineReqInput label="Postal code" autoComplete="postalcode"/> }
                        secondInput={ <OneLineNonReqInput label="Apt / Suite / Unit (optional)"/> }
                    />
                </section>
            </section>
            <Link href="/billing" passHref>
                <BasicPrimaryButton text="Continue"/>
            </Link>
        </section>
    )
}

export default ShippingInputs;