import { BasicPrimaryButton } from "../smallComponents/Buttons";

const EmptyCartText = () => {
    return (
        <section className="flex flex-col items-center">
            <p className="mb-6">Your cart is currently empty.</p>
            <BasicPrimaryButton text="Continue shopping"/>
        </section>
    )
}

export default EmptyCartText;