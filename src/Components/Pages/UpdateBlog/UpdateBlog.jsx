import axios from "axios";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateBlog = () => {

    const blogDetails = useLoaderData();
    const {_id, title, image, category, shortDescription, longDescription} = blogDetails;

    const handelUpdateBlogs = e =>{
        e.preventDefault();
        const form = e.target;
        const updateTitel = form.title.value;
        const updatePhotoUrl = form.imageUrl.value;
        const updateCategory = form.category.value;
        const updateShortDescription = form.shortDescription.value;
        const updateLongDescription = form.longDescription.value;

        const updateBlog = {updateTitel, updatePhotoUrl, updateCategory, updateShortDescription, updateLongDescription}

        axios.put(`http://localhost:5000/update/${_id}`, updateBlog)
        .then(res => {
            console.log(res);
            if(res.data.modifiedCount > 0){
                Swal.fire({
                    icon: "success",
                    title: "Blog Update Successfully",
                    showConfirmButton: false,
                    timer: 1000
                  });
            }
        })
    }

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="flex gap-5">
                <div className="w-[50%]">
                    <img className="h-full object-cover" src={image} alt="" />
                </div>
                <div className="w-[50%]">
                    <h1 className="text-center text-3xl mb-10 font-semibold">Update Your Blog</h1>
                    <form onSubmit={handelUpdateBlogs} className="px-5">
                        <div className="flex flex-col lg:flex-row gap-2 lg:gap-8">
                            <div className="w-full">
                                <label className="text-xl font-medium">Title</label>
                                <input className="block w-full px-5 py-3 border-2 rounded-md mt-2" type="text" name="title" defaultValue={title} placeholder="Enter the blog title" />
                            </div>
                            <div className="w-full">
                                <label className="text-xl font-medium">Image Url</label>
                                <input className="block w-full px-5 py-3 border-2 rounded-md mt-2" type="url" name="imageUrl" defaultValue={image} placeholder="Enter image url" />
                            </div>
                        </div>
                        <div className="my-3 lg:my-3">
                        <label className="text-xl font-medium">Category</label>
                            <select className="block w-full px-5 py-3 border-2 rounded-md mt-2" name="category" defaultValue={category}>
                                <option value="">---Seclect Category---</option>
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
                        </div>
                        <div className="flex flex-col lg:flex-row gap-2 lg:gap-8">
                            <div className="w-full">
                                <label className="text-xl font-medium">Short Description</label>
                                <textarea className="block border-2 rounded-md w-full mt-2 px-5 py-3" name="shortDescription" id="" cols="30" rows="5" defaultValue={shortDescription} placeholder="Write a short description..."></textarea>
                            </div>
                            <div className="w-full">
                                <label className="text-xl font-medium">Long Description</label>
                                <textarea className="block border-2 rounded-md w-full mt-2 px-5 py-3 overflow-hidden" name="longDescription" id="" cols="30" rows="5" defaultValue={longDescription} placeholder="Write a long description..."></textarea>
                            </div>
                        </div>
                        <input className="px-5 py-3 bg-slate-700 mt-5 w-36 rounded-md text-white font-semibold cursor-pointer" type="submit" value="Add Blog" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateBlog;