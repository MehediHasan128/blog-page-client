import { useLoaderData } from "react-router-dom";
import DisplayAllBlogs from "./DisplayAllBlogs/DisplayAllBlogs";

const AllBlogs = () => {
  const blogs = useLoaderData();

  return (
    <div>
      <h1 className="text-center text-3xl lg:text-4xl font-bold my-10">All Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-10 lg:px-20">
        {
            blogs.map(blog => <DisplayAllBlogs key={blog._id} blog={blog} />)
        }
      </div>
    </div>
  );
};

export default AllBlogs;
