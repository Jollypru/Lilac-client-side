import React from 'react';
import { motion } from "framer-motion"
import { useNavigate } from 'react-router';

const Banner = () => {
    const navigate = useNavigate();
    return (
        <section className='p-5 md:p-10 relative w-full h-[100vh] bg-cover bg-center flex items-center' style={{ backgroundImage: "url('https://i.ibb.co/KzFwmnjF/Slider-0b0fe4fc-3aef-4572-88a1-1de862680afa.webp)" }}>
            <div className='relative z-10'>
                <p className='uppercase'>Healthy Skin</p>
                <motion.h1 initial={{x: "-100%"}} animate={{x: "0%"}} transition={{duration: 1.5, ease:"easeOut"}}  className='text-4xl md:text-4xl lg:text-5xl my-4 w-3/4 lg:w-full  lg:font-normal'>Glow Naturally with Skincare</motion.h1>
                <p className='mb-6 text-sm md:text-lg w-3/4 md:w-full'>Discover our natural skincare products that bring out your beauty.</p>
                <button  onClick={() => navigate('/shop')} className='bg-[#2f3e10] py-2 px-5 text-white'>Shop Now</button>
            </div>
        </section>
    );
};

export default Banner;