import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const MainLayout = () => {
    return (
        <div>
            <ToastContainer />
            <Navbar></Navbar>
            <div>
                <Outlet>
                    
                </Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;