import SelectorItem from "./SelectorItem";

const SizeSelector = () => {
    return (
        <section className="flex flex-row flex-wrap my-4">
            <SelectorItem name="S"/>
            <SelectorItem name="M"/>
            <SelectorItem name="L"/>
            <SelectorItem name="XL"/>
        </section>
    )
}

export default SizeSelector;