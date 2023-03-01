import { useAppSelector } from "@/app_redux/hooks";
import CheckoutCartItem from "./CheckoutCartItem";

const ProductList = () => {

    const cartProducts = useAppSelector(state => state.cartProducts);

    return (
        <section className="flex flex-col">
            {cartProducts.value.map((product, index) => (
                <CheckoutCartItem 
                    key={index}
                    id={product.id}
                    productName={product.productName}
                    productQuantity={product.productQuantity}
                    productUnitPrice={product.productUnitPrice}
                    productCurrentStock={product.productCurrentStock}
                    productSize={product.productSize}
                    productVolume={product.productVolume}
                />
            ))}
        </section>
    )
}

export default ProductList;