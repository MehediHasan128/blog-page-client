import { PropTypes } from "prop-types";
import { AiFillHeart } from 'react-icons/ai';

const DisplayWishListBlogs = ({blog, handelRemoveWishList}) => {

    const {_id, title, image, shortDescription, category} = blog;

  return (
    <div className="card lg:card-side bg-gray-100 shadow-xl">
      <figure className="w-[20%]">
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
          <button className="px-5 py-2 bg-slate-700 rounded-lg text-white font-semibold">Details</button>
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
