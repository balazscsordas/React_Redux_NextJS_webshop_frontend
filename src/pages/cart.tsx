import CartBlock from "@/components/cart/CartBlock";
import Layout from "@/components/layout/Layout";
import Head from "next/head";

const CartPage = () => {
    return (
        <>
            <Head>
                <title>DogHouse | Cart</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <CartBlock />
            </Layout>
        </>
    )
}

export default CartPage;