import ProductFilterBlock from "./productFilter/ProductFilterBlock";
import ProductListBlock from "./ProductListBlock";
import ProductSorter from "./productSorter/ProductSorter";

const CategoryBlock = () => {
    return (
        <section className="flex flex-col md:flex-row max-w-7xl m-auto mt-12 px-4">
            <ProductFilterBlock />
            <div className="flex-1">
                <ProductSorter/>
                <ProductListBlock />
            </div>
        </section>
    )
}

export default CategoryBlock;