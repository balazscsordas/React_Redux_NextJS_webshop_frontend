import ProductItem from "@/components/products/ProductItem";
import { ProductListInterface } from "@/interfaces/ProductInterfaces";

interface Props {
    newProducts: ProductListInterface[];
}

const NewProducts = ({ newProducts }: Props) => {

    return (
        <section className="max-w-7xl mx-auto px-4 mt-8">
            <h2 className="font-semibold mb-10 text-center">New Products</h2>
            <section className="grid grid-cols-1 min-[400px]:grid-cols-2 md:grid-cols-3 gap-6">
                { newProducts.map((product, index) => (
                    <ProductItem 
                        key={index}
                        id={product.id} 
                        name={product.name} 
                        unitPrice={product.unitPrice} 
                        imageURL={product.imageURL}
                    />
                ))}
            </section>
        </section>
    )
}

export default NewProducts; 