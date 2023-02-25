
const informationList = [
    "Hassle-free returns. 30-day postage paid returns.",
    "Free shipping to first time customers."
]

const TopInformationBar = () => {

    return (
        <section className="bg-tetriary2">
            <div className="max-w-7xl m-auto">
                <p className="p-1 text-sm">{informationList[0]}</p>
            </div>
        </section>
    )
}

export default TopInformationBar;