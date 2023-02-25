import BannerImage from "./BannerImage";
import BannerText from "./BannerText";

const MainBannerBlock = () => {
    return (
        <section className="bg-secondary h-screen flex items-center">
            <div className="max-w-7xl m-auto flex flex-col md:flex-row flex-wrap items-center w-full">
                <BannerText/>
                <BannerImage/>
            </div>
        </section>
    )
}

export default MainBannerBlock;