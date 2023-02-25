import ProductItem from "../ProductItem";
import ProductImage from "../../../../public/dogimageforbanner.webp";

const ProductListBlock = () => {
    return (
        <section className="grid grid-cols-3 gap-5 flex-1"> 
            <ProductItem name="Lilac Dog Leash" price={20} productImage={ProductImage}/>
            <ProductItem name="Lilac Dog Leash" price={20} productImage={ProductImage}/>
            <ProductItem name="Lilac Dog Leash" price={20} productImage={ProductImage}/>
            <ProductItem name="Lilac Dog Leash" price={20} productImage={ProductImage}/>
            <ProductItem name="Lilac Dog Leash" price={20} productImage={ProductImage}/>
            <ProductItem name="Lilac Dog Leash" price={20} productImage={ProductImage}/>
            <ProductItem name="Lilac Dog Leash" price={20} productImage={ProductImage}/>
            <ProductItem name="Lilac Dog Leash" price={20} productImage={ProductImage}/>
            <ProductItem name="Lilac Dog Leash" price={20} productImage={ProductImage}/>
        </section>
    )
}

export default ProductListBlock;