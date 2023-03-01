import ProductFilterBlock from "./productFilter/ProductFilterBlock";
import ProductListBlock from "./ProductListBlock";
import ProductSorter from "./productSorter/ProductSorter";

const CategoryBlock = () => {
    return (
        <section className="flex flex-row max-w-7xl m-auto mt-12">
            <ProductFilterBlock />
            <div className="flex-1">
                <ProductSorter/>
                <ProductListBlock />
            </div>
        </section>
    )
}

export default CategoryBlock;