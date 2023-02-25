import ProgressbarItem from "./ProgressbarItem";

interface Props {
    status1?: "active" | "completed",
    status2?: "active" | "completed",
    status3?: "active" | "completed",
    status4?: "active" | "completed",
}

const CheckoutProgressbar = ({ status1, status2, status3, status4 }: Props) => {
    return (
        <section className="flex flex-row max-w-md mx-auto">
            <ProgressbarItem status={status1} text="Shipping"/>
            <ProgressbarItem status={status2} text="Billing"/>
            <ProgressbarItem status={status3} text="Payment"/>
            <ProgressbarItem status={status4} text="Confirm"/>
        </section>
    )
}

export default CheckoutProgressbar;