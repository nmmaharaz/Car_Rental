import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import FooterInfo from "../components/Footer";


const MainLayout = () => {
    return (
        <div>
            <ToastContainer />
            <Navbar></Navbar>
            <div className="min-h-[calc(100vh-180px)]">
                <Outlet>
                    
                </Outlet>
            </div>
           <FooterInfo></FooterInfo>
        </div>
    );
};

export default MainLayout;