import ProductItem from "../ProductItem";
import { useAppSelector } from "@/app_redux/hooks";

const ProductListBlock = () => {

    const categoryProductList = useAppSelector(state => state.categoryDetails.categoryProductList);

    return (
        <section className="grid grid-cols-1 min-[400px]:grid-cols-2 md:grid-cols-3 gap-6">
            {categoryProductList.map((product, index) => (
                <ProductItem 
                    key={index} 
                    id={product.id}
                    name={product.name} 
                    unitPrice={product.unitPrice} 
                    imageURL={product.imageURL}/>
            ))}
        </section>
    )
}

export default ProductListBlock;