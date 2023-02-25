import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const informationList = [
    "Hassle-free returns. 30-day postage paid returns.",
    "Free shipping to first time customers."
]

const TopInformationBar = () => {

    return (
        <section className="bg-tetriary2">
            <div className="max-w-7xl m-auto flex flex-row items-center justify-between text-gray-800">
                <span className="p-1 text-sm">{informationList[0]}</span>
                <div className='w-24 flex-row items-center justify-between hidden md:flex'>
                    <InstagramIcon fontSize='small'/>
                    <FacebookIcon fontSize='small'/>
                    <TwitterIcon fontSize='small'/>
                </div>
            </div>
        </section>
    )
}

export default TopInformationBar;