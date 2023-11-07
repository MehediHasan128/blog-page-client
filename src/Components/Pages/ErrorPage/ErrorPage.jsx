import { Link } from 'react-router-dom';
import notFound from '../../../assets/404.png';

const ErrorPage = () => {
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div>
                <div className='text-center space-y-3'>
                <h1 className='text-4xl font-bold text-blue-500'>Opps!</h1>
                <p className='text-lg font-semibold'>Page Not Found</p>
                </div>
                <img src={notFound} alt="" />
                <div className='w-fit mx-auto mt-10'>
                    <Link to='/' className='px-5 py-3 bg-slate-700 text-white rounded-md'>Go Home</Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;