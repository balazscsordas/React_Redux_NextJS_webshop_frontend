import CartProducts from "./CartProducts";
import CartSummary from "./CartSummary";

const CartBlock = () => {
    return (
        <section className="max-w-7xl m-auto mt-10 p-4">
            <h1 className="text-center font-semibold mb-8">Cart</h1>
            <section className="flex flex-col md:flex-row">
                <CartProducts />
                <CartSummary />
            </section>
        </section>
    )
}

export default CartBlock;