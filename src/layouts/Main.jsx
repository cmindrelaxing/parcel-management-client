import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import NavBar from "../pages/Shared/NavBar/NavBar";
import { Toaster } from 'react-hot-toast';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            {/* calculale min-h-screen */}
            <div className=" md:min-h-[calc(100vh-381px)]">
            <Outlet></Outlet>
            </div>
            <Toaster
            position="top-left"
            reverseOrder={false}
            />
            <Footer></Footer>
        </div>
    );
};

export default Main;