import ProductData from "./ProductData";
import ProductImage from "./ProductImage";

const ProductDetailsBlock = () => {
    return (
        <section className="max-w-7xl m-auto mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4">
                <ProductImage />
                <ProductData />
            </div>
        </section>
    )
}

export default ProductDetailsBlock;