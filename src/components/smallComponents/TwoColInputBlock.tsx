interface Props {
    firstInput: JSX.Element,
    secondInput: JSX.Element,
}

const TwoColInputBlock = ({ firstInput, secondInput }: Props) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-4">
            <div>
                { firstInput }
            </div>
            <div>
                { secondInput }
            </div>
        </div>
    )
}

export default TwoColInputBlock;