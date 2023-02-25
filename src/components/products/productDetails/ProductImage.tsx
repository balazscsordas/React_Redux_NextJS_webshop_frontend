import Image, { StaticImageData } from "next/image";

interface Props {
    src: StaticImageData,
}

const ProductImage = ({ src }: Props) => {
    return (
        <section className="basis-1/2 p-4">
            <Image alt="product" src={src}/>
        </section>
    )
}

export default ProductImage;