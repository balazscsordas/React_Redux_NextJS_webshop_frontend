import Badge from "@mui/material/Badge";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Link from "next/link";


const CartIcon = () => {
    return (
        <Link href="/cart" passHref>
            <Badge badgeContent={1} color="primary">
                <ShoppingCartIcon color="action" />
            </Badge>
        </Link>
    )
}

export default CartIcon;