import ProductData from "./ProductData";
import ProductImage from "./ProductImage";

const ProductDetailsBlock = () => {
    return (
        <section className="max-w-7xl m-auto mt-8">
            <div className="flex flex-row">
                <ProductImage />
                <ProductData />
            </div>
        </section>
    )
}

export default ProductDetailsBlock;