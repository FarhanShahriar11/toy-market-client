import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { ThreeDots } from 'react-loader-spinner';
import { AuthContext } from "../../../provider/AuthProvider";
import './Header.css'
import logo from '../../../assets/images.jpg'
const Header = () => {

    const { user, logOut,loading } = useContext(AuthContext);

   
    const [selected, setSelected] = useState(null);
   

    // const handleClick = (buttonIndex) => {
    //     setActiveButton(buttonIndex);
    // }
    const handleItemClick = (items) => {
        setSelected(items);
    }
    const handleLogOut = () => {
        logOut()
        .then()
        .catch(error => {
            console.log(error);
        })
    }

    // const logInMenu = (
    //     <>
    //         <NavLink className={({isActive }) => isActive ? 'border-2 text-white py-1 px-2' : 'px-2' } to='/addToy'>
    //             Add Toy
    //         </NavLink>

    //         <NavLink className={({isActive }) => isActive ? 'border-2 text-white py-1 px-2' : 'px-2' } to='/myToys'>
    //             My Toys
    //         </NavLink>

    //         <p className='cursor-pointer' onClick={handleLogOut}>Logout</p>
    //     </>
    // )
    const listItems = <>
    <button className="btn btn-active btn-ghost gap-4 text-lg"><Link className={selected === 'home' ? 'text-error' : ''}
        onClick={() => handleItemClick('home')} to='/'>  Home</Link>
    <Link className={selected === 'allToys' ? 'text-error' : ''}
        onClick={() => handleItemClick('allToys')} to='/allToy'>All Toys</Link>
    {
        user && <>
            <Link className={selected === 'myToys' ? 'text-error' : ''}
                onClick={() => handleItemClick('myToys')} to='/myToys'>My Toys</Link>
            <Link className={selected === 'addToy' ? 'text-error' : ''}
                onClick={() => handleItemClick('addToy')} to='/addToy'>Add A Toy</Link>
        </>
    }
    <Link className={selected === 'blog' ? 'text-error' : ''}
        onClick={() => handleItemClick('blog')} to='/blog'>Blog</Link>
        </button>
</>

    return (
        
        <div className=''>
            <div className="navbar sm:w-11/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {listItems}
                        </ul>
                    </div>
                    <div className='flex items-center'>
                        <img src={logo} className='w-12' alt="" />
                        <Link to='/' className='hidden sm:inline text-2xl uppercase font-semibold text-gray-700'>Toy<span className="text-error ms-2">Universe</span></Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-6">
                        {listItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                        {
                            !loading ? <div>
                                {
                                    user ? <>

                                        <div id='parent-user-profile' className='flex items-center gap-x-3'>
                                            <label id='user-pic' tabIndex={0} className="relative btn btn-ghost btn-circle avatar flex-row-reverse">
                                                <div className="w-12 rounded-full">
                                                    <img src={user.photoURL ? user.photoURL : 'https://freesvg.org/img/abstract-user-flat-4.png'} />
                                                </div>
                                                <p id='user-name' className='absolute right-14 top-5 opacity-0 text-lg btn bg-white border-0 shadow-md btn-sm font-medium text-error overflow-hidden'>{user.displayName ? user.displayName : user?.email}</p>
                                            </label>
                                        </div>
                                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                            {/* <li>
                                                <Link to='/profile' className="justify-between">
                                                    Profile
                                                    <span className="badge">New</span>
                                                </Link>
                                            </li>
                                            <li><a>Settings</a></li> */}
                                            <li><Link onClick={handleLogOut}>Logout</Link></li>
                                        </ul>
                                    </> : <Link to='/login' className='btn btn-sm btn-outline hover:border-error rounded-md hover:bg-error hover:text-white'>Login</Link>
                                }
                            </div> : <ThreeDots
                                height="45"
                                width="45"
                                radius="9"
                                color="#F87272"
                                ariaLabel="three-dots-loading"
                                wrapperStyle={{}}
                                wrapperClassName=""
                                visible={true}
                            />
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
