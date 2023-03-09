import { useAppDispatch } from "@/app_redux/hooks";
import { setChoosenPayment } from "@/features/paymentDetailsSlice";
import { PaymentOptionInterface } from "@/interfaces/checkout/PaymentInterface";
import Image from "next/image";

const PaymentOption = ({ id, name, imageURL }: PaymentOptionInterface) => {

    const dispatch = useAppDispatch();

    const handleClick = () => {
        dispatch(setChoosenPayment({
            id,
            name,
            imageURL
        }));
    }

    return (
        <div className="radioInputWithLabelOnly m-4 p-2" onClick={handleClick}>
            <input type="radio" id={ name } name="paymentOption" value={ name }/>
            <label className="w-52 sm:w-60 h-40 flex flex-col items-center transition-all border border-gray-300 px-4 py-2 min-w-[3.2rem] justify-center font-medium shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-2xl" htmlFor={ name }>
                <Image alt="payment" src={imageURL} width={100} height={100}/>
                { name }
            </label>
        </div>
    )
}

export default PaymentOption;