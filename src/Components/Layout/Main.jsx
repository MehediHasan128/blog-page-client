import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/NavBar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";


const Main = () => {
    return (
        <div>
            <div className="container mx-auto">
            <Navbar />
            <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;