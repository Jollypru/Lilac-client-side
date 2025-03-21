import React from 'react';
import { NavLink } from 'react-router';
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaRegHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";

const Navbar = () => {

    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li> <NavLink to='/brand'>Brand</NavLink></li>
        <li> <NavLink to='/categories'>Categories</NavLink></li>
        <li><NavLink to='/shop'>Shop</NavLink></li>
        <li><NavLink to='/contact'>Contact Us</NavLink></li>

    </>
    return (
        <div className="navbar bg-base-100 shadow-sm md:px-5 lg:px-8">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="mr-3 lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="text-3xl lato"><span className='text-4xl'>L</span>ILAC</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex gap-5 px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-3 text-lg">
                <button><FaRegUser></FaRegUser></button>
                <button><HiOutlineShoppingBag></HiOutlineShoppingBag></button>
                <button><FaRegHeart></FaRegHeart></button>
            </div>
        </div>
    );
};

export default Navbar;