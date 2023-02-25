import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface Props {
    name: string,
    price: number,
    productImage: StaticImageData,
}

const ProductItem = ({ name, price, productImage }: Props) => {
    return (
        <Link href="/products/product">
            <section className="flex flex-col shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] rounded-2xl hover:-translate-y-2 transition-transform">
                <div className="relative">
                    <Image alt="product" src={productImage} className="rounded-t-2xl"/>
                    <span className="absolute bottom-0 left-0 p-2 bg-tetriary2 uppercase text text-[0.8rem] font-medium tracking-wider">new product</span>
                </div>
                <div className="p-4">
                    <p className="font-medium text-xl my-3">{ name }</p>
                    <span className="text-xl">${ price }</span>
                </div>
            </section>
        </Link>
    )
}

export default ProductItem;