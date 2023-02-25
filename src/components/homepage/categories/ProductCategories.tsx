import CategoryItem from "@/components/products/CategoryItem";
import categoryImage from "../../../../public/dogimageforbanner.webp";

const ProductCategories = () => {
    return (
        <section className="max-w-7xl mx-auto p-2 mt-16">
            <h2 className="font-semibold mb-10 text-center">Categories</h2>
            <section className="grid grid-cols-4 gap-6">
                <CategoryItem name="Leashes" categoryImage={categoryImage}/>
                <CategoryItem name="Hygiene" categoryImage={categoryImage}/>
                <CategoryItem name="Snacks" categoryImage={categoryImage}/>
                <CategoryItem name="Accessories" categoryImage={categoryImage}/>
            </section>
        </section>
    )
}

export default ProductCategories;