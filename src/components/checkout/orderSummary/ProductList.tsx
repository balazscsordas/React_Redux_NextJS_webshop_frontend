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
                    name={product.name}
                    imageURL={product.imageURL}
                    quantity={product.quantity}
                    unitPrice={product.unitPrice}
                    currentStock={product.currentStock}
                    size={product.size}
                    volume={product.volume}
                />
            ))}
        </section>
    )
}

export default ProductList;