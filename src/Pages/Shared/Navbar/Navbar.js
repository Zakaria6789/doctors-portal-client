import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    if (loading) {
        return <Loading></Loading>
    }
    const logOut = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    }
    const menuItems = <>
        <li><Link className="md:text-md focus:bg-[#3A4256]  hover:bg-[#3A4256] hover:text-white focus:text-white" to='/home'>Home</Link></li>
        <li><Link className="md:text-md focus:bg-[#3A4256]  hover:bg-[#3A4256] hover:text-white focus:text-white" to='/appointment'>Appointment</Link></li>
        <li><Link className="md:text-md focus:bg-[#3A4256]  hover:bg-[#3A4256] hover:text-white focus:text-white" to='/reviews'>Reviews</Link></li>
        <li><Link className="md:text-md focus:bg-[#3A4256]  hover:bg-[#3A4256] hover:text-white focus:text-white" to='/about'>About</Link></li>
        <li><Link className="md:text-md focus:bg-[#3A4256]  hover:bg-[#3A4256] hover:text-white focus:text-white" to='/contactus'>Contact Us</Link></li>
        {
            user && <li><Link className="md:text-md focus:bg-[#3A4256]  hover:bg-[#3A4256] hover:text-white focus:text-white" to='/dashboard'>Dashboard</Link></li>
        }
        {
            user ?
                <li><button onClick={logOut} className="btn btn-outline md:text-md hover:bg-[#3A4256] hover:text-white focus:text-white">Sign Out</button></li>
                :
                <li><Link className="btn btn-outline md:text-md focus:bg-[#3A4256]  hover:bg-[#3A4256] hover:text-white focus:text-white" to='/login'>LOGIN</Link></li>
        }
    </>
    return (
        <div className="navbar bg-base-100 md:px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round"
                            strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/home' className="btn btn-ghost normal-case text-xl md:text-2xl">Doctors Portal</Link>
            </div>
            <div className="navbar-end">
                <label tabIndex="1" htmlFor="open-dashboard" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round"
                        strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;