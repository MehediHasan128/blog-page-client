import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import RecentBlogs from "../RecentBlogs/RecentBlogs";
import NewsLetter from "../NewsLetter/NewsLetter";


const Home = () => {

  const recentBlogs = useLoaderData();

  return (
    <div>
        <Banner />
        <div className="my-20">
          <h1 className="text-4xl text-center mb-10 font-bold">Recent Blogs</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-[90%] lg:w-[70%] mx-auto">
            {
              recentBlogs.slice(0,6).map(blog => <RecentBlogs key={blog._id} blog={blog} />)
            }
        </div>
        </div>
        <NewsLetter />
    </div>
  );
};

export default Home;
