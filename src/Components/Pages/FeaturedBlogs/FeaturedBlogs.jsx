import { useLoaderData } from "react-router-dom";
import DisplayTableBlogs from "./DisplayTableBlogs";
const FeaturedBlogs = () => {

    const blogs = useLoaderData();

  return (
    <div className="min-h-screen mt-10">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="flex justify-between">
              <th>Serial Number</th>
              <th>Profile</th>
              <th>Blog Title</th>
              <th>Blog Owner</th>
            </tr>
          </thead>
          <tbody>
            {
                blogs.slice(0, 10).map((blog, idx) => <DisplayTableBlogs key={blog._id} blog={blog} idx={idx} />)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FeaturedBlogs;
