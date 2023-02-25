import { AddToCartButton, BasicSecondaryButton } from "../smallComponents/Buttons";

const CartSummary = () => {
    return (
        <section className="bg-secondary basis-1 md:basis-1/3 p-6 rounded-xl shadow-md">
            <div className="flex flex-row justify-between">
                <h4 className="font-medium">Subtotal</h4>
                <h4>50$</h4>
            </div>
            <div className="text-center my-6">
                <input type="checkbox"/>
                <span className="ml-2">I agree with the terms and conditions</span>
            </div>
            <div className="my-6">
                <AddToCartButton text="Check out"/>
                <div className="my-4">
                    <BasicSecondaryButton text="Continue shopping"/>
                </div>
            </div>
        </section>
    )
}

export default CartSummary;