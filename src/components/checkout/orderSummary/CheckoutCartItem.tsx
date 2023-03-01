import { ProductInCartInterface } from "@/interfaces/ProductInCartInterface";
import Image from "next/image";
import productImage from "../../../../public/dogimageforbanner.webp";


const CheckoutCartItem = ({ id, productName, productUnitPrice, productQuantity, productCurrentStock, productSize, productVolume }: ProductInCartInterface) => {

    return (
        <section className="flex flex-row border-b-[1px] py-4 relative">
            <Image alt="product" src={productImage} width={50}/>
            <div className="flex flex-col ml-8">
                <p className="font-medium text-base">{ productName }</p>
                <p className="mt-auto text-base">Quantity: {productQuantity}</p>
            </div>
            <p className="ml-auto pl-6 font-medium">{ productUnitPrice * productQuantity }$</p>
        </section>
    )
}

export default CheckoutCartItem;