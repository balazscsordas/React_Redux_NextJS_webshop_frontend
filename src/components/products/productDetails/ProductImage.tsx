import { useAppSelector } from "@/app_redux/hooks";
import Image from "next/image";

const ProductImage = () => {

    const productData = useAppSelector(state => state.productDetails);

    return (
        <section className="basis-1/2">
            <Image className="sticky top-24" alt="product" src={productData.productData?.imageURL} width={800} height={800}/>
        </section>
    )
}

export default ProductImage;