import { Link } from 'react-router-dom';
import errorImg from "../../assets/1.png"
const Error = () => {
    return (
        <div>
            <div className='w-10/12 mx-auto'>
                <img src={errorImg} className='h-[80vh] w-full' alt="" />

                <div className='text-center mt-6'>
                    <Link to='/'>
                        <button className='bg-violet-600 hover:bg-violet-700 py-2 px-7 text-white text-lg font-semibold'>
                            <h2>Back To Home</h2>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Error;