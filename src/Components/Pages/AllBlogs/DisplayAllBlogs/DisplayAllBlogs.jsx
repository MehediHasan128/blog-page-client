import { PropTypes } from 'prop-types';

const DisplayAllBlogs = ({blog}) => {

    const {title, image, category, shortDescription} = blog;

    return (
      <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg h-[70%]">
      <div className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40 h-[50%]">
        <img
        className='w-full h-full object-cover'
          src={image}
          alt="ui/ux review check"
        />
        {/* <button
          className="!absolute top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
          data-ripple-dark="true"
        >
          <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="w-6 h-6"
            >
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"></path>
            </svg>
          </span>
        </button> */}
      </div>
      <div className="p-6 flex-1">
        <div className="space-y-5 mb-3">
          <h5 className="block font-sans text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
            {title}
          </h5>
          <p className='bg-slate-600 w-fit px-5 py-1 rounded-full text-white font-semibold'>{category}</p>
        </div>
        <p className="block font-sans text-base antialiased font-light leading-relaxed text-gray-700">
          {shortDescription.slice(0, 100)}...
        </p>
      </div>
      <div className="p-6 pt-3">
        <button
          className="block w-full select-none rounded-lg bg-slate-700 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md transition-all hover:shadow-l focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
          data-ripple-light="true"
        >
          Reserve
        </button>
      </div>
    </div>
    );
};


DisplayAllBlogs.propTypes = {
    blog: PropTypes.object
}

export default DisplayAllBlogs;