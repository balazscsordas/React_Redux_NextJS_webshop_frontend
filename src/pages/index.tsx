import MainBannerBlock from '@/components/homepage/banner/MainBannerBlock'
import ProductCategories from '@/components/homepage/categories/ProductCategories'
import NewProducts from '@/components/homepage/newProducts/NewProducts'
import Layout from '@/components/layout/Layout'
import { CategoryListInterface } from '@/interfaces/CategoryInterface'
import { ProductListInterface } from '@/interfaces/ProductInterfaces'
import axios from 'axios'
import { InferGetServerSidePropsType } from 'next'
import Head from 'next/head'

export const getServerSideProps = async () => {
  const options = {
      headers: {
          withCredentials: true,
      }
  }
  const url = process.env.NEXT_PUBLIC_BASE_URL_SERVER + "/api/category/getall";
  const response = await axios.get(url, options);
  const categoryList: CategoryListInterface[] = response.data.data;

  const url2 = process.env.NEXT_PUBLIC_BASE_URL_SERVER + "/api/Product/GetNewProducts";
  const response2 = await axios.get(url2, options);
  const newProducts: ProductListInterface[] = response2.data.data;

  return {
      props: {
        categoryList,
        newProducts
      }
  }
}

export default function Home({ categoryList, newProducts }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>DogHouse</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <MainBannerBlock />
        <NewProducts newProducts={newProducts}/>
        <ProductCategories categoryList={categoryList}/>
      </Layout>
    </>
  )
}
