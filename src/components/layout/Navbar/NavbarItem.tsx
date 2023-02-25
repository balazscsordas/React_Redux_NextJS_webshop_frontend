import Link from "next/link";

interface Props {
    href: string,
    text: string,
}

const NavbarItem = ({ href, text }: Props) => {
    return (
        <Link className="p-6 font-medium" href={href} passHref>
            { text }
        </Link>
    )
}

export default NavbarItem;