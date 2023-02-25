import ProductList from "./ProductList";

const OrderSummaryBlock = () => {
    return (
        <section className="bg-secondary rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] basis-1/4 p-4 m-4 mb-auto">
            <h5 className="text-center mb-4 font-semibold">Order Summary</h5>
            <ProductList />
            <div className="border-t-2 border-gray-300">
                <div className="flex flex-row items-center justify-between my-4">
                    <p className="font-medium">Subtotal</p>
                    <span className="font-medium">50$</span>
                </div>
                <div className="flex flex-row items-center justify-between my-4 text-gray-500">
                    <p className="font-medium">Delivery fee</p>
                    <span>0$</span>
                </div>
                <div className="flex flex-row items-center justify-between">
                    <p className="font-medium">Total to pay</p>
                    <span className="font-medium">50$</span>
                </div>
            </div>
        </section>
    )
}

export default OrderSummaryBlock;