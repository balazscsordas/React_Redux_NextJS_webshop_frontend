import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Link from 'next/link';

interface Props {
    text: string,
    href: string,
}

const BackToPreviousStage = ({ text, href }: Props) => {
    return (
        <Link className='uppercase flex flex-row items-center text-gray-400' href={ href }>
            <ChevronLeftIcon/>
            <span className='text-sm font-medium ml-2'>{ text }</span>
        </Link>
    )
}

export default BackToPreviousStage;