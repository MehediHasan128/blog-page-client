import { useLoaderData } from "react-router-dom";
import DisplayAllBlogs from "./DisplayAllBlogs/DisplayAllBlogs";

const AllBlogs = () => {
  const blogs = useLoaderData();
  console.log(blogs);

  return (
    <div>
      <div className="grid grid-cols-4 gap-5">
        {
            blogs.map(blog => <DisplayAllBlogs key={blog._id} blog={blog} />)
        }
      </div>
    </div>
  );
};

export default AllBlogs;
