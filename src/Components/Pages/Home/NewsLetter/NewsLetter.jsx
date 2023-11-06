import Swal from 'sweetalert2';
import subscribe from '../../../../assets/subscribe.jpg';

const NewsLetter = () => {

    const handelSubscribe = e =>{
        e.preventDefault();
        const form = e.target;
        Swal.fire({
            icon: "success",
            title: "Thank you for subscribing to our newsletter",
            showConfirmButton: false,
            timer: 1500
          });
          form.reset();
    }

    return (
        <div className="mb-20 relative">
            <img className='w-full h-96 object-cover rounded brightness-50' src={subscribe} alt="" />
            <div className='absolute top-0 h-full w-full'>
            <div className='flex justify-center items-center h-full'>
                <div className='text-white text-center space-y-3 px-5'>
                    <h1 className='text-4xl font-semibold'>Subscribe to Our Newsletter</h1>
                    <p>Stay in the loop with the latest updates and exclusive content! Join our newsletter and be the first to <br /> receive fresh articles, tips, and insights delivered right to your inbox.</p>
                    <div>
                        <form onSubmit={handelSubscribe}>
                            <div className='relative'>
                            <input type="email" name="email" placeholder='Enter your email' className='px-5 py-2 w-full  rounded-full' required />
                            <input type="submit" value="Subscribe" className="absolute right-0 bg-slate-600 px-5 py-2 rounded-r-full" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default NewsLetter;