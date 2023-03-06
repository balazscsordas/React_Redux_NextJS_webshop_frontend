import Badge from "@mui/material/Badge";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Link from "next/link";
import { useAppSelector } from "@/app_redux/hooks";
import { getNumberOfItemsInCart } from "@/utils/cart";

const CartIcon = () => {

    const cartProducts = useAppSelector(state => state.cartProducts.value);

    return (
        <Link href="/cart" passHref>
            <Badge badgeContent={ getNumberOfItemsInCart(cartProducts) } color="primary">
                <ShoppingCartIcon color="action" />
            </Badge>
        </Link>
    )
}

export default CartIcon;