import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import DisplayWishListBlogs from "./DisplayWishListBlogs/DisplayWishListBlogs";
import axios from "axios";


const WishList = () => {

    const [wishListBlogs, setWishListBlogs] = useState([]);
    console.log(wishListBlogs);
    const [blogsRemaining, setBlogsRemaining] = useState(wishListBlogs);
    console.log(blogsRemaining);
    const {user} = useContext(AuthContext);

    useEffect(() =>{
        fetch(`http://localhost:5000/wishLists?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setWishListBlogs(data))
    },[user?.email])

    const handelRemoveWishList = (id) =>{
        axios.delete(`http://localhost:5000/wishList/${id}`)
        .then(res => {
            if(res.data.deletedCount > 0){

            }
        })
    }

    return (
        <div>
            <div className="flex flex-col gap-5">
                {
                    wishListBlogs.map(blog => <DisplayWishListBlogs key={blog._id} blog={blog} handelRemoveWishList={handelRemoveWishList} />)
                }
            </div>
        </div>
    );
};

export default WishList;