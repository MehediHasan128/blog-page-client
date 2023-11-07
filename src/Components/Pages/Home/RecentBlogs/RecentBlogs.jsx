import axios from "axios";
import { PropTypes } from "prop-types";
import { useContext, useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import 'react-photo-view/dist/react-photo-view.css';

const RecentBlogs = ({ blog }) => {

  const {user} = useContext(AuthContext);
  const userEmail = user?.email;

  const { _id, title, image, category, shortDescription, longDescription, writerName, writerEmail, writerProfile } = blog;

  const wishListBlogs = {title, image, category, shortDescription, longDescription, writerName, writerEmail, writerProfile, userEmail, blogId: _id};

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
        <PhotoProvider>
          <PhotoView src={image}>
          <img className="brightness-75" src={image} alt="Shoes" />
          </PhotoView>
        </PhotoProvider>
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
        <h1 className="text-xl font-semibold">{title}</h1>
        <div className="bg-slate-600 w-fit px-3 text-white my-3 font-medium rounded-full">
          <p>{category}</p>
        </div>
        <p>{shortDescription}</p>
        <div className="card-actions">
          <Link className="bg-slate-700 w-full py-2 rounded-lg text-white text-center" to={`/blogs/${_id}`}>
          <button>
            Details
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

RecentBlogs.propTypes = {
  blog: PropTypes.object,
};

export default RecentBlogs;
