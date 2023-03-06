import { ProductInCartInterface } from "@/interfaces/ProductInterfaces";
import Image from "next/image";

const CheckoutCartItem = ({ id, name, unitPrice, imageURL, quantity, currentStock, size, volume }: ProductInCartInterface) => {

    return (
        <section className="flex flex-row border-b-[1px] py-4 relative">
            <Image alt="product" src={imageURL} width={50} height={50} className="mb-auto"/>
            <div className="flex flex-col ml-8">
                <p className="font-medium text-base">{ name }</p>
                <p className="mt-auto text-base">Size: {size}</p>
                <p className="mt-auto text-base">Size: {volume}</p>
                <p className="mt-auto text-base">Quantity: {quantity}</p>
            </div>
            <p className="ml-auto pl-6 font-medium">{ unitPrice * quantity }$</p>
        </section>
    )
}

export default CheckoutCartItem;