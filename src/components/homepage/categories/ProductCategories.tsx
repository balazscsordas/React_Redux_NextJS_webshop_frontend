import CategoryItem from "@/components/products/CategoryItem";
import { CategoryListInterface } from "@/interfaces/CategoryInterface";

interface Props {
    categoryList: CategoryListInterface[];
}

const ProductCategories = ({ categoryList }: Props) => {

    return (
        <section className="max-w-7xl mx-auto p-2 mt-16">
            <h2 className="font-semibold mb-10 text-center">Categories</h2>
            <section className="grid grid-cols-1 min-[400px]:grid-cols-2 md:grid-cols-3 gap-6">
                {categoryList.map((category, index) => (
                    <CategoryItem 
                        key={index} 
                        id={category.id}
                        name={category.name} 
                        imageURL={category.imageURL}/>
                ))}
            </section>
        </section>
    )
}

export default ProductCategories;