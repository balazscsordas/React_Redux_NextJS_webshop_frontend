import Link from "next/link";
import { ReactNode } from "react";

interface Props {
    children: ReactNode,
}

const CheckoutLayout = ({ children }: Props) => {
    return (
        <>
            <section className="border-b-2 mb-8">
                <Link href="/">
                    <h2 className="text-center p-3 md:p-6 font-semibold">DogHouse</h2>
                </Link>
            </section>
            <section className="max-w-7xl m-auto mb-8">
                { children }
            </section>
        </>
    )
}

export default CheckoutLayout;