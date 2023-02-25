import Image from "next/image";
import dogImage from "../../../../public/dogimageforbanner.webp";

const BannerImage = () => {
    return (
        <div className="flex-1">
            <Image 
                className="rounded-full"
                alt="dog" 
                src={dogImage} 
                width={500}
            />
        </div>
    )
}

export default BannerImage;