import { PropTypes } from "prop-types";
import { AiFillHeart } from 'react-icons/ai';
import { Link } from "react-router-dom";

const DisplayWishListBlogs = ({blog, handelRemoveWishList}) => {

    const {_id, title, image, shortDescription, category, blogId} = blog;

  return (
    <div className="card card-compact lg:card-side bg-gray-100 shadow-xl w-[80%] lg:w-auto mx-auto">
      <figure className="lg:w-[20%]">
        <img
          src={image}
        />
      </figure>
      <div className="card-body">
        <div className="flex items-center justify-between">
        <h2 className="card-title">{title}</h2>
        <AiFillHeart onClick={() => handelRemoveWishList(_id)} className="text-3xl text-red-700 cursor-pointer" />
        </div>
        <p>{shortDescription}</p>
        <div className="card-actions justify-between">
            <p className="px-5 py-2 bg-slate-700 max-w-fit text-white rounded-full">{category}</p>
          <Link to={`/blogs/${blogId}`} className="px-5 py-2 bg-slate-700 rounded-lg text-white font-semibold">
          <button>Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

DisplayWishListBlogs.propTypes = {
    blog: PropTypes.object,
    handelRemoveWishList: PropTypes.function
}

export default DisplayWishListBlogs;
