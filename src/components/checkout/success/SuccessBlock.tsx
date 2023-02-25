import CheckoutProgressbar from "../checkoutProgressbar/CheckoutProgressbar";
import Link from "next/link";
import { BasicPrimaryButton } from "@/components/smallComponents/Buttons";

const SuccessBlock = () => {
    return (
        <section>
            <CheckoutProgressbar status1='completed' status2="completed" status3="completed" status4="completed"/>
            <section className="grid justify-center items-center m-auto text-center mt-20">
                <h2 className="font-bold mb-4 inline-block">Thank you for the order!</h2>
                <Link href='/' passHref className="mt-4">
                    <BasicPrimaryButton text="Back to homepage"/>
                </Link>
            </section>
        </section>
    )
}

export default SuccessBlock;