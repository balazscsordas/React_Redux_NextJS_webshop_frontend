import { useAppSelector } from "@/app_redux/hooks";
import ProductList from "./ProductList";

const OrderSummaryBlock = () => {

    const cartProducts = useAppSelector(state => state.cartProducts);
    
    const deliveryFee = 0;

    const getTotalCartValue = () => {
        let totalCartValue = 0;
        cartProducts.value.map(product => (
            totalCartValue += product.quantity * product.unitPrice
        ))
        return totalCartValue;
    }

    return (
        <section className="bg-secondary rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] basis-1/4 p-4 m-4 mb-auto">
            <h5 className="text-center mb-4 font-semibold">Order Summary</h5>
            <ProductList />
            <div className="border-t-2 border-gray-300">
                <div className="flex flex-row items-center justify-between my-4">
                    <p className="font-medium">Subtotal</p>
                    <span className="font-medium">{ getTotalCartValue() }$</span>
                </div>
                <div className="flex flex-row items-center justify-between my-4 text-gray-500">
                    <p className="font-medium">Delivery fee</p>
                    <span>{ deliveryFee }$</span>
                </div>
                <div className="flex flex-row items-center justify-between">
                    <p className="font-medium">Total to pay</p>
                    <span className="font-medium">{ getTotalCartValue() + deliveryFee }$</span>
                </div>
            </div>
        </section>
    )
}

export default OrderSummaryBlock;