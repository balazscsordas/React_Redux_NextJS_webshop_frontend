interface Props {
    name: string,
    value: string | number,
}

const SummaryItem = ({ name, value }: Props) => {
    return (
        <section className="flex flex-row items-center justify-between mt-2">
            <span>{ name }:</span>
            <span>{ value }</span>
        </section>
    )
}

export default SummaryItem;