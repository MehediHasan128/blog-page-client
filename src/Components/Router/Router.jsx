import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Pages/Authentication/Login/Login";
import Registar from "../Pages/Authentication/Registar/Register";
import Home from "../Pages/Home/Home/Home";
import AddBlog from "../Pages/AddBlog/AddBlog";
import AllBlogs from "../Pages/AllBlogs/AllBlogs";
import WishList from "../Pages/WishList/WishList";
import BlogDetails from "../Pages/BlogDetails/BlogDetails";
import UpdateBlog from "../Pages/UpdateBlog/UpdateBlog";
import PrivetRoute from "./PrivetRoute";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import FeaturedBlogs from "../Pages/FeaturedBlogs/FeaturedBlogs";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('https://blog-page-server-six.vercel.app/recentBlogs')
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
                element: <PrivetRoute><AddBlog /></PrivetRoute>
            },
            {
               path: '/allBlogs' ,
               element: <AllBlogs />,
               loader: () => fetch('https://blog-page-server-six.vercel.app/allBlogs')
            },
            {
                path: '/wishList',
                element: <PrivetRoute><WishList /></PrivetRoute>
            },
            {
                path: '/blogs/:id',
                element: <BlogDetails />,
                loader: ({params}) => fetch(`https://blog-page-server-six.vercel.app/blogs/${params.id}`)
            },
            {
                path: '/updateBlog/:id',
                element: <PrivetRoute><UpdateBlog /></PrivetRoute>,
                loader: ({params}) => fetch(`https://blog-page-server-six.vercel.app/updateBlog/${params.id}`)
            },
            {
                path: '/featuredBlogs',
                element: <FeaturedBlogs />,
                loader: () => fetch('https://blog-page-server-six.vercel.app/featured')
            }
        ]
    }
]);


export default router;