import { Link, NavLink } from "react-router-dom";
import logo from '../../../../assets/logo.png';

const Navbar = () => {

    const navLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/addBlog'>Add Blog</NavLink></li>
        <li><NavLink to='/allBlogs'>All Blogs</NavLink></li>
        <li><NavLink to='/featuredBlogs'>Featured Blogs</NavLink></li>
        <li><NavLink to='/wishList'>Wishlist</NavLink></li>
    </>
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
           {navLinks}
          </ul>
        </div>
        <Link to='/' className="flex items-center gap-2 lg:gap-3">
            <img className="w-12 lg:w-20" src={logo} alt="" />
            <h1 className="text-lg lg:text-2xl font-bold">Blog Page</h1>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg font-medium">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end">
        <div className="space-x-2 lg:space-x-5">
            <Link to='/login'><button className="border-2 px-3 lg:px-5 py-2 lg:py-3 rounded-md border-slate-800 font-bold">Login</button></Link>
            <Link to='/registar'><button className="border-2 px-3 lg:px-5 py-2 lg:py-3 rounded-md border-slate-800 lg:font-bold text-white bg-slate-800">Register</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
