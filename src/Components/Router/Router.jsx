import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Pages/Authentication/Login/Login";
import Registar from "../Pages/Authentication/Registar/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/registar',
                element: <Registar />
            }
        ]
    }
]);


export default router;