import { useAppDispatch } from "@/app_redux/hooks";
import Layout from "@/components/layout/Layout";
import CategoryBlock from "@/components/products/categories/CategoryBlock";
import { setCategoryProductList, setCategorySizeOptions, setCategoryVolumeOptions } from "@/features/categoryDetailsSlice";
import { ProductListInterface } from "@/interfaces/ProductInterfaces";
import axios from "axios";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import Head from "next/head";

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    const id = context.params?.id;
    const onStock = context.query.onStock;
    const minPrice = context.query.minPrice;
    const maxPrice = context.query.maxPrice;
    const sizes = context.query.sizes;
    const volumes = context.query.volumes;
    
    const options = {
        params: { id, onStock, minPrice, maxPrice, sizes, volumes },
        headers: {
            withCredentials: true,
        }
    }
    const url = `${process.env.NEXT_PUBLIC_BASE_URL_SERVER}/api/Product/GetProductsByCategoryId`;
    const response = await axios.get(url, options);
    const productList: ProductListInterface[] = response.data.data;

    const options2 = {
        params: { id },
        headers: {
            withCredentials: true,
        }
    }
    const url2 = `${process.env.NEXT_PUBLIC_BASE_URL_SERVER}/api/Category/GetProductOptions`;
    const response2 = await axios.get(url2, options2);
    const sizeOptions = response2.data.data.sizeOptions;
    const volumeOptions = response2.data.data.volumeOptions;

    return {
        props: {
            productList,
            sizeOptions,
            volumeOptions,
        }
    }
}

const ProductDetailsPage = ({ productList, sizeOptions, volumeOptions }: InferGetServerSidePropsType<typeof getServerSideProps>) => {

    const dispatch = useAppDispatch();
    dispatch(setCategoryProductList(productList));
    dispatch(setCategorySizeOptions(sizeOptions));
    dispatch(setCategoryVolumeOptions(volumeOptions));
    
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