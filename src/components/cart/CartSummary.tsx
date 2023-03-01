import { useAppSelector } from "@/app_redux/hooks";
import { getTotalCartValue } from "@/utils/cart";
import Link from "next/link";
import { AddToCartButton, BasicSecondaryButton } from "../smallComponents/Buttons";

const CartSummary = () => {

    const cartProducts = useAppSelector(state => state.cartProducts);

    return (
        <section className="bg-secondary basis-1 md:basis-1/3 p-6 rounded-xl shadow-md mb-auto sticky top-24">
            <div className="flex flex-row justify-between">
                <h4 className="font-medium">Subtotal</h4>
                <h4>{`${getTotalCartValue(cartProducts.value)}$`}</h4>
            </div>
            <div className="my-6">
                <Link href="/shipping" passHref>
                    <AddToCartButton text="Check out"/>
                </Link>
                <div className="my-4">
                    <BasicSecondaryButton text="Continue shopping"/>
                </div>
            </div>
        </section>
    )
}

export default CartSummary;