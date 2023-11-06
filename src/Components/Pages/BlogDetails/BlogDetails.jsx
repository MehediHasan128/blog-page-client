import { useLoaderData } from "react-router-dom";

const BlogDetails = () => {
  const blog = useLoaderData();

  const { image, title, category, shortDescription, longDescription, writerName, writerEmail, writerProfile} = blog;

  const handelAddComment = e =>{
    e.preventDefault();
    const form = e.target;
    const comment = form.comment.value;
    console.log(comment);
  }

  return (
    <div className="w-[70%] mx-auto">
      <div>
        <img src={image} alt="" />
      </div>
      <div className="flex gap-10 mt-20">
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
          <p className="text-xl mb-5">{shortDescription}</p>
          <p className="text-xl">{longDescription}</p>
        </div>
      </div>

      <div>
        <form onSubmit={handelAddComment} className="mt-10">
            <div className="relative">
            <input className=" w-full px-5 py-4 rounded-full border" type="text" name="comment" placeholder="Write a comment ..." />
            <input className="bg-slate-700 px-6 py-2 rounded-full text-white font-medium absolute right-2 top-2 cursor-pointer" type="submit" value="Send" />
            </div>
        </form>
      </div>
    </div>
  );
};

export default BlogDetails;
