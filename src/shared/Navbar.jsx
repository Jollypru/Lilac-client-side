import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaRegHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";

const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li> <NavLink to='/brand'>Brand</NavLink></li>
        <li> <NavLink to='/categories'>Categories</NavLink></li>
        <li><NavLink to='/shop'>Shop</NavLink></li>
        <li><NavLink to='/contact'>Contact Us</NavLink></li>

    </>

    useEffect(() => {
       const handleScroll = () => {
        if(window.scrollY > 50){
            setIsScrolled(true);
        }else{
            setIsScrolled(false);
        }
       };
       window.addEventListener("scroll", handleScroll);
       return () => window.removeEventListener("scroll", handleScroll)
    }, []);

    return (
        <div className={`navbar md:px-5 lg:py-5 lg:px-8 sticky w-full top-0 z-50 transition-all duration-500 ${isScrolled ? "bg-[#fbf7ef] shadow-md" : "bg-transparent shadow-xs"}`}>
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
                <ul className="flex gap-8 px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end flex items-center gap-5 text-lg">
                <Link to='/register'><button className='mt-2'><FaRegUser></FaRegUser></button></Link>
                <button><HiOutlineShoppingBag></HiOutlineShoppingBag></button>
                <button><FaRegHeart></FaRegHeart></button>
            </div>
        </div>
    );
};

export default Navbar;