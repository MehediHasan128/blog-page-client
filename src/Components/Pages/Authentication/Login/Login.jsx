import { HiOutlineMail } from "react-icons/hi";
import { BiSolidKey } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import blog from "../../../../assets/blog2.jpg";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {

    const {loginUser, userWithGoogle} = useContext(AuthContext)

  const [showPass, setShowPass] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handelUserLogin = e =>{
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
    .then((result) => {
        if (result) {
          Swal.fire({
            icon: "success",
            title: "Successfully loggedIn",
            showConfirmButton: false,
            timer: 1000,
          })
          navigate(location?.state ? location.state : '/')
        }
      })
      .catch((err) => {
        if (err) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `${err.message}`,
          });
        }
      })
  }

  const handelUserGoogleLogin = () =>{
    userWithGoogle()
    .then((result) => {
      if (result) {
        Swal.fire({
          icon: "success",
          title: "User Created Successfully",
          showConfirmButton: false,
          timer: 1000,
        })
        navigate(location?.state ? location.state : '/')
      }
    })
    .catch(err =>{
      if (err) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${err.message}`,
        });
      }
    })
  }

  return (
    <div className="flex justify-center items-center min-h-screen container mx-auto">
      <div className="w-[90%] lg:w-[70%] flex flex-col lg:flex-row items-center lg:gap-5 bg-slate-0">
        <div className="lg:w-[50%] relative">
          <img className="w-[800px] h-full object-cover brightness-50" src={blog} alt="" />
          <div className="text-white absolute top-0 w-full h-full">
            <div className="flex justify-center items-center h-full">
             <div className="text-center px-2 lg:px-0">
             <h1 className="text-3xl lg:text-4xl font-bold mb-4">Welcome to Blog Page</h1>
             <h3 className="text-xl font-semibold">Explore, engage, and enjoy your reading journey.</h3>
             </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[50%]">
          <div className="w-full lg:w-[80%] mx-auto my-10">
            <h1 className="text-2xl lg:text-3xl text-center font-semibold mb-10">
              Please Login your account!
            </h1>
            <form onSubmit={handelUserLogin}>
              <div className="relative">
                <input
                  className="pl-12 pr-5 py-3 w-full rounded-full border-2"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                />
                <HiOutlineMail className="text-2xl absolute top-3 left-4" />
              </div>
              <div className="relative my-5">
                <input
                  className="pl-12 pr-5 py-3 w-full rounded-full border-2"
                  type={showPass ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  required
                />
                <BiSolidKey className="text-2xl absolute top-3 left-4" />
                {showPass ? (
                  <AiOutlineEyeInvisible
                    onClick={() => setShowPass(!showPass)}
                    className="text-2xl absolute top-3 right-5"
                  />
                ) : (
                  <AiOutlineEye
                    onClick={() => setShowPass(!showPass)}
                    className="text-2xl absolute top-3 right-5"
                  />
                )}
              </div>
              <input
                className="w-full bg-slate-700 py-2 rounded-full text-white text-lg font-bold cursor-pointer"
                type="submit"
                value="Login"
              />
            </form>
            <div className="my-10 relative">
              <hr />
              <div className="bg-white absolute -top-3 left-[46%]">
                <h1 className="px-3 font-semibold">OR</h1>
              </div>
            </div>

            <div>
                <button onClick={handelUserGoogleLogin} className="flex justify-center items-center text-xl font-semibold gap-5 border-2 px-5 py-3 lg:w-[70%] mx-auto rounded-md">
                    <FcGoogle className="text-3xl" />
                    <h1>Login with Google</h1>
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;