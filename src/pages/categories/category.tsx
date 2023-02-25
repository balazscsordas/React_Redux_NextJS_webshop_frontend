import Layout from "@/components/layout/Layout";
import CategoryBlock from "@/components/products/categories/CategoryBlock";
import Head from "next/head";

const ProductDetailsPage = () => {
    return (
        <>
            <Head>
                <title>DogHouse</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <CategoryBlock />
            </Layout>
        </>
    )
}

export default ProductDetailsPage;