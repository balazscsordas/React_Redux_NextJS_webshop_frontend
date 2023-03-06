import { CategoryListInterface } from "@/interfaces/CategoryInterface";
import Image from "next/image";
import Link from "next/link";

const CategoryItem = ({ id, name, imageURL }: CategoryListInterface) => {

    return (
        <Link href={`/categories/${id}`}>
            <section className="flex flex-col shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] rounded-2xl hover:-translate-y-2 transition-transform">
                <Image 
                    alt="product" 
                    src={imageURL} 
                    className="rounded-t-2xl" 
                    width={400} 
                    height={400}
                />
                <p className="font-medium text-xl text-center p-6">{ name }</p>
            </section>
        </Link>
    )
}

export default CategoryItem;