interface Props {
    name: string;
    value: string;
    checked: boolean;
}

const SelectorItem = ({ name, value, checked }: Props) => {
    return (
        <div className="radioInputWithLabelOnly">
            <input type="radio" id={value} name={name} value={value} defaultChecked={checked}/>
            <label className="transition-all border border-gray-300 px-4 py-2 min-w-[3.2rem] justify-center m-1 font-medium" htmlFor={value}>{value}</label>
        </div>
    )
}

export default SelectorItem;