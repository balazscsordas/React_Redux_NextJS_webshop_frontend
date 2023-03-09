import { useAppSelector } from "@/app_redux/hooks";
import CartItem from "./CartItem";

const CartProducts = () => {

    const cartProducts = useAppSelector(state => state.cartProducts.value);

    return (
        <section className="flex-1 m-4">
            {cartProducts.map((product, index) => (
                <CartItem 
                    key={index}
                    id={product.id}
                    name={product.name}
                    imageURL={product.imageURL}
                    unitPrice={product.unitPrice}
                    currentStock={product.currentStock}
                    quantity={product.quantity}
                    size={product.size}
                    volume={product.volume}
                />
            ))}
        </section>
    )
}

export default CartProducts;