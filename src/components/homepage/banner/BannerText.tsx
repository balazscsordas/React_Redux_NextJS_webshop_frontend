import { BasicPrimaryButton } from "@/components/smallComponents/Buttons";

const BannerText = () => {
    return (
        <div className="flex-1">
            <h1 className="font-bold mb-4">Sustainable design for modern dogs</h1>
            <p className="mb-4">Stylish and eco-friendly dog accessories for the conscious pup.</p>
            <BasicPrimaryButton text="Shop kits"/>
        </div>
    )
}

export default BannerText;