import ProductFilterBlock from "./productFilter/ProductFilterBlock";
import ProductListBlock from "./ProductListBlock";

const CategoryBlock = () => {
    return (
        <section className="flex flex-row max-w-7xl m-auto mt-12">
            <ProductFilterBlock />
            <ProductListBlock />
        </section>
    )
}

export default CategoryBlock;