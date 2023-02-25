interface Props {
    name: string,
}

const SizeFilterItem = ({ name }: Props) => {
    return (
        <section className="flex flex-row items-center my-2">
            <input type="checkbox" className="w-4 h-4 mr-4"/>
            <span>{ name }</span>
        </section>
    )
}

export default SizeFilterItem;