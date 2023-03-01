import { useAppSelector } from "@/app_redux/hooks";
import CartItem from "./CartItem";

const CartProducts = () => {

    const cartProducts = useAppSelector(state => state.cartProducts);

    return (
        <section className="flex-1 m-4">
            {cartProducts.value.map((product, index) => (
                <CartItem 
                    key={index}
                    id={product.id}
                    productName={product.productName}
                    productUnitPrice={product.productUnitPrice}
                    productCurrentStock={product.productCurrentStock}
                    productQuantity={product.productQuantity}
                    productSize={product.productSize}
                    productVolume={product.productVolume}
                />
            ))}
        </section>
    )
}

export default CartProducts;