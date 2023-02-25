import CheckoutCartItem from "./CheckoutCartItem";

const ProductList = () => {
    return (
        <section className="flex flex-col">
            <CheckoutCartItem name="Organic Baked Bites - Chicken" currentQuantity={2} currentStock={8} unitPrice={20}/>
            <CheckoutCartItem name="Organic Baked Bites - Chicken" currentQuantity={2} currentStock={8} unitPrice={20}/>
            <CheckoutCartItem name="Organic Baked Bites - Chicken" currentQuantity={2} currentStock={8} unitPrice={20}/>
        </section>
    )
}

export default ProductList;