import ProductItem from "../ProductItem";
import ProductImage from "../../../../public/dogimageforbanner.webp";
import { StaticImageData } from "next/image";

interface Props {
    name: string,
    price: number,
    productImage: StaticImageData,
}

const ProductListBlock = () => {

    const productList: Props[] = [
        {
            name: "Na Dog",
            price: 20,
            productImage: ProductImage
        },
        {
            name: "Dog",
            price: 44,
            productImage: ProductImage
        },
        {
            name: "Na",
            price: 56,
            productImage: ProductImage
        },
        {
            name: "Na asd Dog",
            price: 74,
            productImage: ProductImage
        },
        {
            name: "Kutya Dog",
            price: 22,
            productImage: ProductImage
        },
        {
            name: "NaMivan",
            price: 11,
            productImage: ProductImage
        }
    ]

    return (
        <section className="grid grid-cols-3 gap-5">
            {productList.map((product, index) => (
                <ProductItem 
                    key={index} 
                    name={product.name} 
                    price={product.price} 
                    productImage={product.productImage}/>

            ))}
        </section>
    )
}

export default ProductListBlock;