import { BasicPrimaryButton } from "@/components/smallComponents/Buttons";
import BackToPreviousStage from "../BackToPreviousStage";
import PaymentOption from "./PaymentOption";
import { PaymentOptionInterface } from "@/interfaces/PaymentInterface";
import Box from "@mui/material/Box";
import { ChangeEvent, useState } from "react";
import Router from "next/router";
import { useAppSelector } from "@/app_redux/hooks";
import Collapse from "@mui/material/Collapse";

interface Props {
    paymentOptions: PaymentOptionInterface[]
}

const PaymentInputs = ({ paymentOptions }: Props) => {

    const chosenPayment = useAppSelector(state => state.paymentDetails);

    const [showErrorMessage, setShowErrorMessage] = useState(false);

    const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (chosenPayment.value) Router.push("/confirm");
        else setShowErrorMessage(true);
    }

    return (
        <section className="flex-1 m-4">
            <BackToPreviousStage text="back to billing details" href="/billing"/>
            <section className="mb-4">
                <h2 className="py-4 font-semibold border-b-2">Payment Details</h2>
                <Box component="form" onSubmit={handleSubmit}>
                    <section className="flex flex-row flex-wrap">
                        {
                            paymentOptions.map((payment, index) => (
                                <PaymentOption 
                                    key={index}
                                    id={payment.id}
                                    name={payment.name}
                                    image={payment.image}
                                />
                            ))
                        }
                    </section>
                    <Collapse in={showErrorMessage}>
                        <p className="text-red-600 mb-4">You have to choose a payment option.</p>
                    </Collapse>
                    <BasicPrimaryButton type="submit" text="Continue"/>
                </Box>
            </section>
        </section>
    )
}

export default PaymentInputs;