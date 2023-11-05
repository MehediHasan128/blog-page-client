import { PropTypes } from 'prop-types';

const DisplayAllBlogs = ({blog}) => {

    const {title, image, category, shortDescription} = blog;

    return (
        <div className="relative flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-t-xl shadow-none bg-clip-border">
          <img
          className='w-full h-72 object-cover'
            src={image}
            alt="ui/ux review check"
          />
        </div>
        <div className="p-6">
        <div
              data-tooltip="author-2"
              className="w-fit rounded-lg bg-black py-1.5 px-3 font-sans text-sm font-normal text-white focus:outline-none mb-3"
            >
              {category}
            </div>
          <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
           {title}
          </h4>
          <p className="block mt-3 font-sans text-xl antialiased font-normal leading-normal text-gray-700">
            {shortDescription}
          </p>
        </div>
        <div className="flex items-center justify-between p-6">
          <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
            January 10
          </p>
        </div>
      </div>
    );
};


DisplayAllBlogs.propTypes = {
    blog: PropTypes.object
}

export default DisplayAllBlogs;