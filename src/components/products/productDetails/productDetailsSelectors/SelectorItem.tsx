interface Props {
    name: string;
}

const SelectorItem = ({ name }: Props) => {
    return (
        <div className="radioInputWithLabelOnly">
            <input type="radio" id={ name } name="skills" value={ name }/>
            <label className="transition-all border border-gray-300 px-4 py-2 min-w-[3.2rem] justify-center m-1 font-medium" htmlFor={ name }>{ name }</label>
        </div>
    )
}

export default SelectorItem;