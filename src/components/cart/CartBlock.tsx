import { useAppSelector } from "@/app_redux/hooks";
import CartProducts from "./CartProducts";
import CartSummary from "./CartSummary";
import EmptyCartText from "./EmptyCartText";

const CartBlock = () => {

    const cartProducts = useAppSelector(state => state.cartProducts);

    return (
        <section className="max-w-7xl m-auto mt-10 p-4">
            <h1 className="text-center font-semibold mb-8">Cart</h1>
                { cartProducts.value.length > 0
                    ? <section className="flex flex-col md:flex-row">
                        <CartProducts />
                        <CartSummary />
                    </section>
                    : <EmptyCartText />
                }
        </section>
    )
}

export default CartBlock;