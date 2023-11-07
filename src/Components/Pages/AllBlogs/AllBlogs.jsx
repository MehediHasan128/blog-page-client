import { useLoaderData } from "react-router-dom";
import DisplayAllBlogs from "./DisplayAllBlogs/DisplayAllBlogs";
import { BiSearch, BiFilter } from 'react-icons/bi';
import axios from "axios";
import { useState } from "react";

const AllBlogs = () => {
  const blogs = useLoaderData();

  const [searchBlog, setSearchBlog] = useState([]);
  const [filterBlog, setFilterBlog] = useState()
  const [activeSearch, setActiveSearch] = useState(false);
  const [activeFilter, setActiveFilter] = useState(false);

  const handelSearch = e =>{
    e.preventDefault();
    const form = e.target;
    const searchText = form.title.value;

    axios(`https://blog-page-server-six.vercel.app/searchBlog/${searchText}`)
    .then(res => {
      setSearchBlog([res.data]);
    })
    form.reset();
  }

  const handelFilter = e =>{
    e.preventDefault();
    const form = e.target;
    const filterValue = form.filter.value;
    
    axios.get(`https://blog-page-server-six.vercel.app/filterBlogs/${filterValue}`)
    .then(res => {
      setFilterBlog(res.data);
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
          <form className="flex" onSubmit={handelFilter}>
          <select className="border px-5 py-3 rounded-md outline-none" name="filter" id="">
          <option value="">All Category</option>
          <option value="Travel">Travel</option>
          <option value="Food and Cooking">Food and Cooking</option>
          <option value="Lifestyle">Lifestyle</option>
          <option value="Technology">Technology</option>
          <option value="Health and Wellness">Health and Wellness</option>
          <option value="Personal Finance">Personal Finance</option>
          <option value="Parenting">Parenting</option>
          <option value="DIY and Crafts">DIY and Crafts</option>
          <option value="Books and Literature">Books and Literature</option>
          <option value="Environmental and Sustainability">Environmental and Sustainability</option>
          </select>
          <button onClick={() => setActiveFilter(true)} className="flex items-center gap-1 text-lg px-5 py-3 bg-slate-700 text-white font-semibold rounded-r-md" type="submit">Filter <BiFilter /></button>
          </form>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-10 lg:px-20">
        {
            (activeSearch || activeFilter) ?
            <>
              {
                activeFilter ? filterBlog?.map(blog => <DisplayAllBlogs key={blog._id} blog={blog} />) : searchBlog?.map(blog => <DisplayAllBlogs key={blog._id} blog={blog} />)
              }
            </> :
            blogs.map(blog => <DisplayAllBlogs key={blog._id} blog={blog} />)
        }
      </div>
    </div>
  );
};

export default AllBlogs;
