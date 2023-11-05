import { PropTypes } from "prop-types";

const RecentBlogs = ({blog}) => {

    const {title, image, category, shortDescription} = blog

    return (
        <div className="w-[70%] h-[550px] shadow-xl mx-auto rounded-md">
            <div className="w-full h-[50%] overflow-hidden border">
                <img className="w-full h-full object-cover brightness-50 hover:brightness-90 hover:scale-110 duration-700 rounded-t-md" src={image} alt="" />
            </div>
            <div className="h-[50%] px-5 py-5 flex flex-col">
                <div className="flex-1">
                    <h1 className="text-xl font-semibold">{title}</h1>
                    <p className="my-4 bg-slate-600 w-fit px-5 py-1 rounded-full text-white font-medium">{category}</p>
                    <p className="text-gray-500">{shortDescription.slice(0, 110)}...</p>
                </div>

                <button className="bg-slate-800 py-2 rounded-lg text-white">Details</button>
            </div>
        </div>
    );
};

RecentBlogs.propTypes = {
    blog: PropTypes.object
}

export default RecentBlogs;