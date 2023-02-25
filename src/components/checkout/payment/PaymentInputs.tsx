import { BasicPrimaryButton } from "@/components/smallComponents/Buttons";
import Link from "next/link";
import BackToPreviousStage from "../BackToPreviousStage";
import PaymentOption from "./PaymentOption";
import CreditCardImage from "../../../../public/creditcard.png";
import CashOnDeliveryImage from "../../../../public/cashondelivery.png";

const PaymentInputs = () => {
    return (
        <section className="flex-1 m-4">
            <BackToPreviousStage text="back to billing details" href="/billing"/>
            <section className="mb-4">
                <h2 className="py-4 font-semibold border-b-2">Payment Details</h2>
                <section className="flex flex-row flex-wrap">
                    <PaymentOption name="Credit card" src={CreditCardImage}/>
                    <PaymentOption name="Cash on delivery" src={CashOnDeliveryImage}/>
                </section>
            </section>
            <Link href="/confirm" passHref>
                <BasicPrimaryButton text="Continue"/>
            </Link>
        </section>
    )
}

export default PaymentInputs;