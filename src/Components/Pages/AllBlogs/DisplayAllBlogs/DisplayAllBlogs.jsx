import { PropTypes } from 'prop-types';
import { useContext, useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { AuthContext } from '../../../Provider/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const DisplayAllBlogs = ({blog}) => {

  const [like, setLike] = useState(false);
  const {user} = useContext(AuthContext);
  const userEmail = user?.email;

    const {_id, title, image, category, shortDescription, longDescription} = blog;
    const wishListBlogs = {title, image, category, shortDescription, longDescription, userEmail, blogId: _id};

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


DisplayAllBlogs.propTypes = {
    blog: PropTypes.object
}

export default DisplayAllBlogs;