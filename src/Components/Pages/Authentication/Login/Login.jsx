import { HiOutlineMail } from "react-icons/hi";
import { BiSolidKey } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import blog from "../../../../assets/blog2.jpg";
import { useState } from "react";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  console.log(showPass);

  return (
    <div className="flex justify-center items-center min-h-screen container mx-auto">
      <div className="w-[80%] flex items-center gap-5 bg-slate-0">
        <div className="w-[50%] relative">
          <img className="w-[800px] h-full object-cover brightness-50" src={blog} alt="" />
          <div className="text-white absolute top-0 w-full h-full">
            <div className="flex justify-center items-center h-full">
             <div className="text-center">
             <h1 className="text-4xl font-bold mb-4">Welcome to Blog Page</h1>
             <h3 className="text-xl font-semibold">Explore, engage, and enjoy your reading journey.</h3>
             </div>
            </div>
          </div>
        </div>
        <div className="w-[50%]">
          <div className="w-[80%] mx-auto my-10">
            <h1 className="text-3xl text-center font-semibold mb-10">
              Please Login your account!
            </h1>
            <form>
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
                className="w-full bg-slate-700 py-2 rounded-full text-white text-lg font-bold"
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
                <button className="flex justify-center items-center text-xl font-semibold gap-5 border-2 px-5 py-3 w-[60%] mx-auto rounded-md">
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
