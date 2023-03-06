import ProductItem from "@/components/products/ProductItem";
import productImage from "../../../../public/dogimageforbanner.webp";
import ProductBlockTitle from "./ProductBlockTitle";

const NewProducts = () => {
    return (
        <section className="max-w-7xl mx-auto p-2 mt-8">
            <ProductBlockTitle />
            <section className="grid grid-cols-3 gap-6">
                <ProductItem id={1} name="Beige Dog Collar" unitPrice={20} imageURL={productImage}/>
                <ProductItem id={3} name="Beige Dog Collar" unitPrice={20} imageURL={productImage}/>
                <ProductItem id={4} name="Beige Dog Collar" unitPrice={20} imageURL={productImage}/>
                <ProductItem id={5} name="Beige Dog Collar" unitPrice={20} imageURL={productImage}/>
                <ProductItem id={6} name="Beige Dog Collar" unitPrice={20} imageURL={productImage}/>
                <ProductItem id={7} name="Beige Dog Collar" unitPrice={20} imageURL={productImage}/>
            </section>
        </section>
    )
}

export default NewProducts;