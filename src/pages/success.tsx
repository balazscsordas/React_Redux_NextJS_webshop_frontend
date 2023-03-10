import SuccessBlock from "@/components/checkout/success/SuccessBlock";
import CheckoutLayout from "@/components/layout/CheckoutLayout";
import Head from "next/head";

const ShippingPage = () => {
    return (
        <>
            <Head>
                <title>DogHouse | Success</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <CheckoutLayout>
                <SuccessBlock />
            </CheckoutLayout>
        </>
    )
}

export default ShippingPage;