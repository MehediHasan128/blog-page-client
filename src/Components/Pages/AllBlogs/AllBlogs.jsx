import { useLoaderData } from "react-router-dom";
import DisplayAllBlogs from "./DisplayAllBlogs/DisplayAllBlogs";
import { BiSearch } from 'react-icons/bi';
import axios from "axios";
import { useState } from "react";

const AllBlogs = () => {
  const blogs = useLoaderData();

  const [searchBlog, setSearchBlog] = useState();
  const [activeSearch, setActiveSearch] = useState(false);
  console.log(searchBlog);

  const handelSearch = e =>{
    e.preventDefault();
    const form = e.target;
    const searchText = form.title.value;

    axios(`http://localhost:5000/allBlogs/${searchText}`)
    .then(res => {
      setSearchBlog([res.data]);
    })
  }

  return (
    <div>
      <h1 className="text-center text-3xl lg:text-4xl font-bold my-10">All Blogs</h1>
      <div className="mb-20 flex flex-col lg:flex-row lg:justify-between items-center gap-8 lg:gap-0">
        <div className="w-[90%] lg:w-[30%] relative">
          <form onSubmit={handelSearch}>
          <input type="text" name="title" placeholder="Search" className="px-5 py-3 border w-full rounded focus:outline-none" />
          <button onClick={() => setActiveSearch(!activeSearch)} type="submit" className="w-fit bg-transparent outline-none px-7 py-3 absolute top-0 right-0 border rounded-r">
          <BiSearch className="text-2xl" />
          </button>
          </form>
        </div>
        <div>
          <select className="border pl-5 " name="" id="">
            <option value="Travel">Travel</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-10 lg:px-20">
        {
            activeSearch ?
            searchBlog?.map(blog => <DisplayAllBlogs key={blog._id} blog={blog} />) :
            blogs.map(blog => <DisplayAllBlogs key={blog._id} blog={blog} />)
        }
      </div>
    </div>
  );
};

export default AllBlogs;
