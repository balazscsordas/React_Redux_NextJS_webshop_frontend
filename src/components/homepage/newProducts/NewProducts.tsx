import ProductItem from "@/components/products/ProductItem";
import productImage from "../../../../public/dogimageforbanner.webp";
import ProductBlockTitle from "./ProductBlockTitle";

const NewProducts = () => {
    return (
        <section className="max-w-7xl mx-auto p-2 mt-8">
            <ProductBlockTitle />
            <section className="grid grid-cols-3 gap-6">
                <ProductItem name="Beige Dog Collar" price={20} productImage={productImage}/>
                <ProductItem name="Beige Dog Collar" price={20} productImage={productImage}/>
                <ProductItem name="Beige Dog Collar" price={20} productImage={productImage}/>
                <ProductItem name="Beige Dog Collar" price={20} productImage={productImage}/>
                <ProductItem name="Beige Dog Collar" price={20} productImage={productImage}/>
                <ProductItem name="Beige Dog Collar" price={20} productImage={productImage}/>
            </section>
        </section>
    )
}

export default NewProducts;