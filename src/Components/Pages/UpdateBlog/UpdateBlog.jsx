import { useLoaderData } from "react-router-dom";

const UpdateBlog = () => {

    const blogDetails = useLoaderData();
    console.log(blogDetails);

    return (
        <div>
            
        </div>
    );
};

export default UpdateBlog;