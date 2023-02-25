import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { useState } from 'react';


interface Props {
    currentStock: number,
}

const StockChecker = ({ currentStock }: Props) => {

    const [onStock, setOnStock] = useState(true);

    return (
            <div className="my-8 flex flex-row items-center">
                <FiberManualRecordIcon color={onStock ? 'success' : 'error'}/>
                <span className='ml-2'>{ onStock ? "In stock, ready to ship" : "Out of stock" }</span>
            </div>
        )
    }

export default StockChecker;