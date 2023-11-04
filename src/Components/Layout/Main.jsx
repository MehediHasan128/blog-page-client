import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/NavBar/Navbar";


const Main = () => {
    return (
        <div>
            <div className="container mx-auto py-4">
            <Navbar />
            </div>
            <Outlet />
        </div>
    );
};

export default Main;