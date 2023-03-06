import ProductItem from "../ProductItem";
import { useState } from "react";
import { useAppSelector } from "@/app_redux/hooks";

const ProductListBlock = () => {

    const categoryProductList = useAppSelector(state => state.categoryDetails.categoryProductList);

    const [reorderedProductList, setReorderedProductList] = useState(categoryProductList);

    return (
        <section className="grid grid-cols-3 gap-5">
            {reorderedProductList.map((product, index) => (
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