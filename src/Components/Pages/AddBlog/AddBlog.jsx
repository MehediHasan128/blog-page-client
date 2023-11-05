import axios from "axios";
import moment from "moment/moment";


const AddBlog = () => {

    const handelAddBlogToDB = e =>{
        e.preventDefault()
        const form = e.target;
        const title = form.title.value;
        const image = form.imageUrl.value;
        const category = form.category.value;
        const shortDescription = form.shortDescription.value;
        const longDescription = form.longDescription.value;
        const date = moment().format('M-D-YYYY')
        const time = moment().format('h:mm:ss a')

        const blog = {title, image, category, shortDescription, longDescription, time, date}


        axios.post('http://localhost:5000/blog', blog)
        .then(res => {
            console.log(res);
        })
        .catch(err =>{
            console.log(err);
        })

        

    }

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="w-full">
                <div className="text-center space-y-5">
                    <h1 className="text-4xl font-semibold">Weclome to Blog Page</h1>
                    <p className="text-2xl">Start writing your blog</p>
                    <div className="bg-slate-700 w-32 h-1 mx-auto"></div>
                </div>
                <div className="lg:w-[70%] mx-auto mt-20">
                    <form onSubmit={handelAddBlogToDB} className="px-5">
                        <div className="flex flex-col lg:flex-row gap-2 lg:gap-8">
                            <div className="w-full">
                                <label className="text-xl font-medium">Title</label>
                                <input className="block w-full px-5 py-3 border-2 rounded-md mt-2" type="text" name="title" placeholder="Enter the blog title" />
                            </div>
                            <div className="w-full">
                                <label className="text-xl font-medium">Image Url</label>
                                <input className="block w-full px-5 py-3 border-2 rounded-md mt-2" type="url" name="imageUrl" placeholder="Enter image url" />
                            </div>
                        </div>
                        <div className="my-3 lg:my-3">
                        <label className="text-xl font-medium">Category</label>
                            <select className="block w-full px-5 py-3 border-2 rounded-md mt-2" name="category">
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
                                <textarea className="block border-2 rounded-md w-full mt-2 px-5 py-3" name="shortDescription" id="" cols="30" rows="5" placeholder="Write a short description..."></textarea>
                            </div>
                            <div className="w-full">
                                <label className="text-xl font-medium">Long Description</label>
                                <textarea className="block border-2 rounded-md w-full mt-2 px-5 py-3" name="longDescription" id="" cols="30" rows="5" placeholder="Write a long description..."></textarea>
                            </div>
                        </div>
                        <input className="px-5 py-3 bg-slate-700 mt-5 w-36 rounded-md text-white font-semibold cursor-pointer" type="submit" value="Add Blog" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddBlog;