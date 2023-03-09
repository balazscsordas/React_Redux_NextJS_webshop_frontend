import { useAppSelector } from '@/app_redux/hooks';
import { ProductDataInterface } from '@/interfaces/ProductInterfaces';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const StockChecker = () => {

    const productData = useAppSelector(state => state.productDetails.productData);
    
    const checkStock = (productData: ProductDataInterface | null) => {
        if (productData && productData.currentStock > 0) 
            return true;
        else 
            return false;
    }

    return (
            <div className="my-6 sm:my-8 flex flex-row items-center">
                <FiberManualRecordIcon color={checkStock(productData) ? 'success' : 'error'}/>
                <span className='ml-2'>{ checkStock(productData) ? "In stock, ready to ship" : "Out of stock" }</span>
            </div>
        )
    }

export default StockChecker;