import React, { useContext, useState } from 'react';
import logo from "../../../assets/730_generated.jpg"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash, FaGoogle, FaGithub, FaFacebookF } from 'react-icons/fa';
import { AuthContext } from '../../../provider/AuthProvider';
import Swal from "sweetalert2";
const Login = () => {
    const { signIn, googleSign, githubSign } = useContext(AuthContext);

    
    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';


    const [showPass, setShowPass] = useState(false);
    const [error, setError] = useState('');

    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
        .then(result => {
            console.log(result.user)
            navigate(from, { replace: true });
            Swal.fire(
                "Success!",
                "Login Successful.",
                "success"
            );
        })
        .catch(error => {
            console.log(error);
            setError('Incorrect Email or Password');
        })
    }


    
    const handleGoogleSign = () => {
        googleSign()
        .then(result => {
            console.log(result.user)
            navigate(from, { replace: true });
            Swal.fire(
                "Success!",
                "Login Successful.",
                "success"
            );
        })
        .catch(error => {
            console.log(error)
            Swal.fire(
                "Oops!",
                "Something went wrong!",
                "error"
            );
        })
        
    }

    const handleOnChange = () =>{
        setError('');
    }

    return (
        <div>
            <div className="overflow-hidden sm:w-10/12 my-7 sm:p-5 mx-auto grid grid-cols-1 md:grid-cols-2 justify-center items-center">

                {/* Left Side Info*/}
                <div data-aos="fade-right" className="w-full flex flex-col items-center justify-center text-center md:text-left mb-5 md:mb-0">
                    <div className="flex w-full justify-center md:justify-start">
                        <img src={logo} className="max-h-[250px]" alt="" />
                    </div>
                    <p className="text-lg text-gray-500 w-11/12">Toy wonderland awaits! Dive into a world of imagination. Log in now for exclusive deals, interactive games, and endless fun. Join us today!</p>
                </div>

                {/* Right Side Login From */}
                <div data-aos="fade-left" className="min-w-[400px] border rounded-lg p-6 py-8 mx-auto">
                    <h1 className="text-2xl text-error mb-3 font-medium">Login</h1>
                    <form onSubmit={handleLogin}>
                        <div>
                            <input name="email" onChange={handleOnChange} className="border font-[400] text-lg px-3 py-2 w-full outline-none focus:ring rounded-md" type="email" placeholder="Enter your email" />
                        </div>
                        <div className="mt-4 mb-2 border relative">
                            <input name="password" onChange={handleOnChange} className="border font-[400] text-lg px-3 py-2 w-full outline-none focus:ring rounded-md" type={showPass ? 'text' : 'password'} placeholder="Password" />
                            {
                                showPass ? <div onClick={() => setShowPass(!showPass)} className="absolute cursor-pointer text-error top-[15px] right-2"><FaEye size={18} /></div>
                                    : <div onClick={() => setShowPass(!showPass)} className="absolute cursor-pointer text-error top-[15px] right-2"><FaEyeSlash size={18} /></div>
                            }
                        </div>
                        <p className="underline text-gray-500 text-md">Forget Password</p>
                        <input type="submit" className="mt-5 btn btn-block btn-error text-white text-lg font-normal capitalize" value="Log in" />

                        {/* Error Message */}
                        {
                            error && <div className="alert alert-error rounded-md p-1 text-[#d34c4c] bg-[#f1c2c2] mt-1">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    <span>{error}</span>
                                </div>
                            </div>
                        }

                        <p className="text-gray-500 text-center font-[300] mt-3 mb-3">also login with-</p>

                        {/* Right side Social Media */}
                        <div className="grid grid-flow-col justify-center space-x-2">
                            <Link onClick={handleGoogleSign} className="w-[35px] h-[35px] flex items-center justify-center border transition-all  rounded-full hover:text-white text-error hover:bg-error border-error">
                                <FaGoogle size={20} />
                            </Link>

                            <Link className="w-[35px] h-[35px] flex items-center justify-center border transition-all  rounded-full hover:text-white text-error hover:bg-error border-error">
                                <FaGithub size={20} />
                            </Link>

                            <Link className="w-[35px] h-[35px] flex items-center justify-center transition-all border rounded-full hover:text-white text-error hover:bg-error border-error">
                                <FaFacebookF size={20} />
                            </Link>
                        </div>
                    </form>
                    <p className="mt-3 text-center text-gray-500">Are you new here ? <Link to='/register' className="underline btn-link">Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;