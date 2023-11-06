import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import DisplayWishListBlogs from "./DisplayWishListBlogs/DisplayWishListBlogs";
import axios from "axios";
import Swal from "sweetalert2";


const WishList = () => {

    const [wishListBlogs, setWishListBlogs] = useState([]);
    const allBlogs = wishListBlogs;

    const {user} = useContext(AuthContext);

    useEffect(() =>{
        fetch(`http://localhost:5000/wishLists?email=${user?.email}`, {credentials: 'include'})
        .then(res => res.json())
        .then(data => setWishListBlogs(data))
    },[user?.email])

    const handelRemoveWishList = (id) =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to remove this blog!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:5000/wishList/${id}`)
                .then(res => {
                    if(res.data.deletedCount > 0){
                        const remainingBlogs = wishListBlogs.filter(blogs => blogs._id !== id);
                        setWishListBlogs(remainingBlogs);
                        Swal.fire({
                            icon: "success",
                            title: "Blog has been removed.",
                            showConfirmButton: false,
                            timer: 1000,
                          });
                    }
                })
            }
          });
    }

    return (
        <div>
            <div className="flex flex-col gap-5">
                {
                    allBlogs.map(blog => <DisplayWishListBlogs key={blog._id} blog={blog} handelRemoveWishList={handelRemoveWishList} />)
                }
            </div>
        </div>
    );
};

export default WishList;