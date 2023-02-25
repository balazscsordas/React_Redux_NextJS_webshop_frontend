import Image from "next/image";
import productImage from "../../../../public/dogimageforbanner.webp";

interface Props {
    name: string,
    currentStock: number,
    currentQuantity: number,
    unitPrice: number,
}

const CheckoutCartItem = ({ name, currentQuantity, currentStock, unitPrice }: Props) => {
    return (
        <section className="flex flex-row border-b-[1px] py-4 relative">
            <Image alt="product" src={productImage} width={50}/>
            <div className="flex flex-col ml-8">
                <p className="font-medium text-base">{ name }</p>
                <p className="mt-auto text-base">Quantity: {currentQuantity}</p>
            </div>
            <p className="ml-auto pl-6 font-medium">{ unitPrice * currentQuantity }$</p>
        </section>
    )
}

export default CheckoutCartItem;