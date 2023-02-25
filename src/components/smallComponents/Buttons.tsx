import CircularProgress from "@mui/material/CircularProgress"

interface Props {
    text: string,
    type?: "button" | "submit" | "reset",
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
    addIcon?: boolean,
    disabled?: boolean,
}

export const BasicPrimaryButton = ({ text, type="button", onClick, disabled }: Props) => {
    return (
        <div className='relative inline-block'>
            <button 
                className='base primary'
                type={type}
                onClick={onClick}
                disabled={disabled}
                >{text}
            </button>
            {disabled && 
                <span className='absoluteCenter flex justify-center'>
                    <CircularProgress className='text-green-500' thickness={4} size={20}/>
                </span> 
            }
        </div>
    )
}

export const BasicSecondaryButton = ({ text, type="button", onClick, disabled }: Props) => {
    return (
        <div className='relative w-full'>
            <button 
                className='base secondary w-full justify-center'
                type={type}
                onClick={onClick}
                disabled={disabled}
                >{text}
            </button>
            {disabled && 
                <span className='absoluteCenter flex justify-center'>
                    <CircularProgress className='text-green-500' thickness={4} size={20}/>
                </span> 
            }
        </div>
    )
}

export const AddToCartButton = ({ text, type="button", onClick, disabled }: Props) => {
    return (
        <div className='relative w-full'>
            <button 
                className='base primary w-full justify-center'
                type={type}
                onClick={onClick}
                disabled={disabled}
                >{text}
            </button>
            {disabled && 
                <span className='absoluteCenter flex justify-center'>
                    <CircularProgress className='text-green-500' thickness={4} size={20}/>
                </span> 
            }
        </div>
    )
}