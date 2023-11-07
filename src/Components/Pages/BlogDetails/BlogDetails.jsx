import { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import DisplayComments from "../DisplayComments/DisplayComments";

const BlogDetails = () => {
  const { user } = useContext(AuthContext);
  const userEmail = user?.email;
  const userProfile = user?.photoURL;
  const userName = user?.displayName;

  const [comments, setComments] = useState([]);

  const blog = useLoaderData();

  const {
    _id,
    image,
    title,
    category,
    shortDescription,
    longDescription,
    writerName,
    writerEmail,
    writerProfile,
  } = blog;


  axios
    .get(`https://blog-page-server-six.vercel.app/comments/${_id}`)
    .then((res) => {
      setComments(res.data);
    })
    .catch((err) => {
      console.log(err);
    });

  const handelAddComment = (e) => {
    e.preventDefault();
    const form = e.target;
    const comment = form.comment.value;
    const userComment = { comment, userProfile, userName, blogId: _id };

    axios
      .post("https://blog-page-server-six.vercel.app/comments", userComment)
      .then((res) => {
        if (res.data.acknowledged) {
          Swal.fire({
            icon: "success",
            title: "Comment added successfully",
            showConfirmButton: false,
            timer: 1000,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="lg:w-[70%] mx-auto mb-20">
      <div>
        <img className="" src={image} alt="" />
      </div>
      <div className="flex flex-col lg:flex-row gap-10 mt-20 px-5">
        <div className="w-[100%] text-center">
          <div className="avatar">
            <div className="w-24 h-24 rounded-full">
              <img src={writerProfile} />
            </div>
          </div>
          <h1 className="text-xl font-bold mb-5">Writer: {writerName}</h1>
          <p>Email: {writerEmail}</p>
        </div>
        <div>
          <h1 className="text-4xl font-bold">Title: {title}</h1>
          <p className="my-5 text-2xl font-semibold">Category: {category}</p>
          <p className="text-xl mb-5 text-justify">{shortDescription}</p>
          <p className="text-xl mb-10 text-justify">{longDescription}</p>
          {
            (writerEmail === userEmail)?
            <Link to={`/updateBlog/${_id}`} className="px-5 py-3 bg-slate-600 rounded-lg text-white font-semibold">
            <button onClick={`/updateBlog/${_id}`}>Update Blog</button>
            </Link> :
            <></>
          }
        </div>
      </div>

      <div className="mt-20 rounded space-y-3 p-5 bg-slate-100">
        {
            comments.map(userComment => <DisplayComments key={userComment._id} userComment={userComment} />)
        }
      </div>

      <div>
        {userEmail !== writerEmail ? (
          <form onSubmit={handelAddComment} className="mt-10">
            <div className="relative">
              <input
                className=" w-full px-5 py-4 rounded-full border"
                type="text"
                name="comment"
                placeholder="Write a comment ..."
              />
              <input
                className="bg-slate-700 px-6 py-2 rounded-full text-white font-medium absolute right-2 top-2 cursor-pointer"
                type="submit"
                value="Send"
              />
            </div>
          </form>
        ) : (
          <>
            <p className="text-center mt-10 text-2xl text-gray-400">
              Opps! You can not comment on your blog
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default BlogDetails;
