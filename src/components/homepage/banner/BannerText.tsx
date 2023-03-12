import { BasicPrimaryButton } from "@/components/smallComponents/Buttons";
import Link from "next/link";

const BannerText = () => {
    return (
        <div className="flex-1">
            <h1 className="font-bold mb-4">Sustainable design for modern dogs</h1>
            <p className="mb-4">Stylish and eco-friendly dog accessories for the conscious pup.</p>
            <Link href="/categories/1" passHref>
                <BasicPrimaryButton text="Shop kits"/>
            </Link>
        </div>
    )
}

export default BannerText;