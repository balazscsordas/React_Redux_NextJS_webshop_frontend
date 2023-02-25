import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Navbar/Header";
import TopInformationBar from "./TopInformationBar";

interface Props {
    children: ReactNode,
}

const Layout = ({ children }: Props) => {
    return (
        <>
            <TopInformationBar/>
            <Header/>
            { children }
            <Footer/>
        </>
    )
}

export default Layout;