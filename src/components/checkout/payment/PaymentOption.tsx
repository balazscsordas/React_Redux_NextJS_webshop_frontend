import Image, { StaticImageData } from "next/image";
import { useState } from "react";

interface Props {
    name: string,
    src: StaticImageData,
}

const PaymentOption = ({ name, src }: Props) => {

    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        setChecked(currState => !currState);
    }

    return (
        <section className="w-80 h-40 flex items-center justify-center border m-4 p-2 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] flex-col rounded-2xl" onClick={handleChange}>
            <Image alt="payment" src={ src } width={100}/>
            <div className="flex flex-row items-center mt-4">
                <span className="mr-2">{ name }</span>
                <input type="checkbox" checked={checked} onChange={handleChange} className="w-4 h-4"/>
            </div>
        </section>
    )
}

export default PaymentOption;