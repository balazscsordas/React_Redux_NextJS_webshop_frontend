import ProductCategories from "@/components/homepage/categories/ProductCategories";
import Layout from "@/components/layout/Layout";
import { CategoryListInterface } from "@/interfaces/CategoryInterface";
import axios from "axios";
import { InferGetServerSidePropsType } from "next";
import Head from "next/head";

export const getServerSideProps = async () => {
    const options = {
        headers: {
            withCredentials: true,
        }
    }
    const url = process.env.NEXT_PUBLIC_BASE_URL_SERVER + "/api/category/getall";
    const response = await axios.get(url, options);
    const categoryList: CategoryListInterface[] = response.data.data;
  
    return {
        props: {
          categoryList,
        }
    }
  }

  
const CategoriesPage = ({ categoryList }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    return (
        <>
            <Head>
                <title>DogHouse | Categories</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <ProductCategories categoryList={categoryList}/>
            </Layout>
        </>
    )
}

export default CategoriesPage;