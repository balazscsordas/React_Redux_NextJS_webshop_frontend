import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

interface Props {
    status?: "active" | "completed",
    text: string,
}

const ProgressbarItem = ({ status, text }: Props) => {

    return (
        <section className="flex flex-col basis-1/4 items-center">
                { status === 'active' && <RadioButtonCheckedIcon className='text-yellow-400'/> }
                { status === 'completed' && <CheckCircleIcon className='text-green-600'/> }
                { !status && <RadioButtonCheckedIcon className='text-gray-400'/> }
                { status === 'active' && <span className='font-medium text-sm sm:text-lg'>{ text }</span> }
                { status === 'completed' && <span className='font-medium text-sm sm:text-lg'>{ text }</span> }
                { !status && <span className='font-medium text-sm sm:text-lg text-gray-400'>{ text }</span> }
        </section>
    )
}

export default ProgressbarItem;