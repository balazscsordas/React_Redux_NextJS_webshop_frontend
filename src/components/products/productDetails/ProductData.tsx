import { AddToCartButton, BasicPrimaryButton } from "@/components/smallComponents/Buttons";
import ProductQuantityChanger from "./ProductQuantityChanger";
import ShippingInformation from "./ShippingInformation";
import StockChecker from "./StockChecker";

interface Props {
    name: string,
    price: number,
    description: string,
    currentStock: number,
}

const ProductData = ({ name, price, description, currentStock }: Props) => {
    return (
        <section className="basis-1/2 p-4">
            <h2 className="font-medium my-8">{ name }</h2>
            <h4>Price: { price }$</h4>
            <StockChecker currentStock={ currentStock }/>
            <div className="my-12 flex flex-row">
                <ProductQuantityChanger currentStock={ currentStock }/>
                <AddToCartButton text="Add to cart"/>
            </div>
            <p>{ description }</p>
            <ShippingInformation />
        </section>
    )
}

export default ProductData;