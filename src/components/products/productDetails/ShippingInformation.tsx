import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LanguageIcon from '@mui/icons-material/Language';

const ShippingInformation = () => {
    return (
        <section className='my-12 font-medium'>
            <div className='my-3 flex flex-row items-center'>
                <span className='flex items-center'><LanguageIcon/></span>
                <span className='ml-4'>Worldwide shipping</span>
            </div>
            <div className='my-3 flex flex-row items-center'>
                <span className='flex items-center'><LocalShippingIcon/></span>
                <span className='ml-4'>Free returns</span>
            </div>
        </section>
    )
}

export default ShippingInformation;