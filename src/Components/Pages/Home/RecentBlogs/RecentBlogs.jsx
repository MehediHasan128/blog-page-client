import axios from "axios";
import { PropTypes } from "prop-types";
import { useContext, useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Provider/AuthProvider";

const RecentBlogs = ({ blog }) => {

  const {user} = useContext(AuthContext);
  const userEmail = user?.email;

  const { _id, title, image, category, shortDescription, longDescription } = blog;

  const wishListBlogs = {title, image, category, shortDescription, longDescription, userEmail, blogId: _id};

  const [like, setLike] = useState(false);

  
  const handelAddToWishList = () => {
    axios.post('http://localhost:5000/addWishList', wishListBlogs)
    .then(res => {
      if(res.data.acknowledged){
        Swal.fire({
          icon: "success",
          title: "Added Wishlist",
          showConfirmButton: false,
          timer: 1000
        });
      }
    })
    .catch(err =>{
      console.log(err);
    })
  };

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      {like ? (
        <AiFillHeart
          onClick={() => {
            setLike(!like);
          }}
          className="absolute top-4 right-5 text-2xl text-red-600 cursor-pointer"
        />
      ) : (
        <AiOutlineHeart
          onClick={() => {
            setLike(!like);
            handelAddToWishList();
          }}
          className="absolute top-4 right-5 text-2xl text-red-600 cursor-pointer"
        />
      )}
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="bg-slate-600 w-fit px-3 text-white my-3 font-medium rounded-full">
          <p>{category}</p>
        </div>
        <p>{shortDescription}</p>
        <div className="card-actions">
          <button className="bg-slate-700 w-full py-2 rounded-lg text-white">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

RecentBlogs.propTypes = {
  blog: PropTypes.object,
};

export default RecentBlogs;
