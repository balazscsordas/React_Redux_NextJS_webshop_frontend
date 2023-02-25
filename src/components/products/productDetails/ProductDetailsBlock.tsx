import productImage from "../../../../public/dogimageforbanner.webp";
import ProductData from "./ProductData";
import ProductImage from "./ProductImage";

const ProductDetails = () => {
    return (
        <section className="max-w-7xl m-auto mt-8">
            <div className="flex flex-row">
                <ProductImage src={productImage}/>
                <ProductData 
                    name="Organic Baked Bites - Chicken"
                    price={24}
                    description="Our Oven Baked Organic Bites will make a great training reward for your small or overweight pooch. These bite-sized pieces are filled with delicious organic chicken (a single source of animal protein) and fresh, U.S.-grown fruits and vegetables such as sweet potatoes, tomatoes, cranberries, and blueberries. They are easily digestible and work well for dogs with food sensitivities or allergies as well as skin issues."
                    currentStock={2}
                />
            </div>
        </section>
    )
}

export default ProductDetails;