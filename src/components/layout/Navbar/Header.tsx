import Link from "next/link";
import CartIcon from "./CartIcon";
import NavbarItem from "./NavbarItem";

const Header = () => {
    return (
        <section className="sticky top-0 left-0 right-0 bg-secondary z-10">
            <section className="max-w-7xl flex flex-row justify-between m-auto">
                <Link href="/" passHref className="p-6">
                    <span className="font-semibold text-xl">DogHouse</span>
                </Link>
                <nav className="flex flex-row">
                    <NavbarItem href="/" text="Products"/>
                    <NavbarItem href="/" text="About us"/>
                    <NavbarItem href="/" text="Blog"/>
                    <NavbarItem href="/" text="Contact"/>
                </nav>
                <div className="p-6">
                    <CartIcon/>
                </div>
            </section>
        </section>
    )
}

export default Header;