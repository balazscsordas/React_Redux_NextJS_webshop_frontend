import IconButton from "@mui/material/IconButton";
import Link from "next/link";
import CartIcon from "./CartIcon";
import NavbarItem from "./NavbarItem";
import MenuIcon from '@mui/icons-material/Menu';
import Collapse from "@mui/material/Collapse";
import { useState } from "react";

const Header = () => {
    
    const [showMobileNavbar, setShowMobileNavbar] = useState(false);

    const openMobileMenu = () => {
        setShowMobileNavbar(prevValue => !prevValue);
    }

    return (
        <section className="sticky top-0 left-0 right-0 bg-secondary z-10">
            <section className="max-w-7xl flex flex-row justify-between m-auto">
                <Link href="/" passHref className="">
                    <span className="flex items-center font-semibold text-lg sm:text-xl p-4 sm:p-6">DogHouse</span>
                </Link>
                <nav className="hidden sm:flex flex-row">
                    <NavbarItem href="categories" text="Products"/>
                    <NavbarItem href="/" text="About Us"/>
                    <NavbarItem href="/" text="Blog"/>
                    <NavbarItem href="/" text="Contact"/>
                </nav>
                <div className="p-2 sm:p-6 flex flex-row items-center">
                    <CartIcon/>
                    <IconButton className="flex sm:hidden ml-4" onClick={openMobileMenu}>
                        <MenuIcon/>
                    </IconButton>
                </div>
            </section>
            <Collapse in={showMobileNavbar}>
                <nav className="flex flex-col border-2">
                    <Link className="px-6 py-4 ml-auto" onClick={() => setShowMobileNavbar(false)} href="/">Products</Link>
                    <Link className="px-6 py-4 ml-auto" onClick={() => setShowMobileNavbar(false)} href="/">About Us</Link>
                    <Link className="px-6 py-4 ml-auto" onClick={() => setShowMobileNavbar(false)} href="/">Blog</Link>
                    <Link className="px-6 py-4 ml-auto" onClick={() => setShowMobileNavbar(false)} href="/">Contact</Link>
                </nav>
            </Collapse>
        </section>
    )
}

export default Header;