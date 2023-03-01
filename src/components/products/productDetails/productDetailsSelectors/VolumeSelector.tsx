import SelectorItem from "./SelectorItem";

const VolumeSelector = () => {
    return (
        <section className="flex flex-row flex-wrap my-4">
            <SelectorItem name="50 ml"/>
            <SelectorItem name="100 ml"/>
            <SelectorItem name="150 ml"/>
            <SelectorItem name="200 ml"/>
        </section>
    )
}

export default VolumeSelector;