import React from 'react';

const SingleFeature = () => {
    return (
        <div className='grid grid-cols-2 gap-5'>
            <div className='overflow-hidden'>
                <img className='transform transition-all ease-in-out duration-500 hover:scale-110' src="https://i.ibb.co/GvcnX2x7/banner-10.jpg" alt="" />
            </div>
            <div className='flex flex-col items-center justify-center text-center'>
                <h1 className='text-5xl mb-8'>Eye cream brightens skin, treats dark circles</h1>
                <button className='border-0 border-b-2 border-b-emerald-800 hover:text-emerald-800 hover:font-medium cursor-pointer'>View More</button>
            </div>
        </div>
    );
};

export default SingleFeature;