import { ReactNode } from "react";
import EditIcon from '@mui/icons-material/Edit';
import Link from "next/link";
    
interface Props {
    title: string,
    children: ReactNode,
    href: string,
}

const SummaryLayout = ({ title, children, href }: Props) => {
    return (
        <section className="p-5 bg-secondary rounded-2xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] relative">
            <h4 className="font-semibold pb-4 border-b-2 mb-4 border-gray-300">{ title }</h4>
            <Link href={ href } passHref className="absolute top-4 right-4">
                <EditIcon />
            </Link>
            { children }
        </section>
    )
}

export default SummaryLayout;