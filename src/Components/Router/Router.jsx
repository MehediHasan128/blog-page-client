import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Pages/Authentication/Login/Login";
import Registar from "../Pages/Authentication/Registar/Register";
import Home from "../Pages/Home/Home/Home";
import AddBlog from "../Pages/AddBlog/AddBlog";
import AllBlogs from "../Pages/AllBlogs/AllBlogs";
import WishList from "../Pages/WishList/WishList";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('http://localhost:5000/recentBlogs')
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
            },
            {
               path: '/allBlogs' ,
               element: <AllBlogs />,
               loader: () => fetch('http://localhost:5000/allBlogs')
            },
            {
                path: '/wishList',
                element: <WishList />
            }
        ]
    }
]);


export default router;