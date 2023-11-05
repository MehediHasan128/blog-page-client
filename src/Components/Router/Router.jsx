import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Pages/Authentication/Login/Login";
import Registar from "../Pages/Authentication/Registar/Register";
import Home from "../Pages/Home/Home/Home";
import AddBlog from "../Pages/AddBlog/AddBlog";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/registar',
                element: <Registar />
            },
            {
                path: '/addBlog',
                element: <AddBlog />
            }
        ]
    }
]);


export default router;