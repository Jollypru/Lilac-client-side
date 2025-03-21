import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer className='bg-black text-gray-500'>
            <div className='flex flex-col md:flex-row justify-between p-5 gap-4 md:p-10'>
                <div>
                    <h1 className='text-3xl text-rose-200 mb-2'>LILAC</h1>
                    <p>123, Skincare Street, Beauty City, CA</p>
                    <p>Email: support@lilac.com</p>
                    <p>Phone: +1 234 567 890</p>
                </div>
                <div>
                    <h2 className='text-white text-xl mb-1'>QUICK LINKS</h2>
                    <ul>
                        <li>About Us</li>
                        <li>Products</li>
                        <li>Contact</li>
                        <li>FAQ</li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-white text-xl mb-1'>FOLLOW US</h2>
                    <div className='flex gap-3'>
                        <Link><FaFacebook></FaFacebook></Link>
                        <Link><FaInstagram></FaInstagram></Link>
                        <Link><FaTwitter></FaTwitter></Link>
                        <Link><FaLinkedin></FaLinkedin></Link>
                    </div>
                </div>
            </div>
            <aside className='bg-gray-950 text-center py-3 text-sm'>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by LILAC</p>
            </aside>
        </footer>
    );
};

export default Footer;
