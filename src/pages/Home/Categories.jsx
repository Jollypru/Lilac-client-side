import React from 'react';

const Categories = () => {
    return (
        <div className='grid grid-cols-3 grid-rows-2 gap-5 mx-10 my-14'>
            <div className='col-span-1 row-span-2 overflow-hidden h-[720px] relative'>
                <div className='h-full relative'>
                    <img className='transition-transform ease-in-out duration-500 scale-105 hover:translate-x-2 h-full' src="https://i.ibb.co/MybL1PCZ/Rectangle-1-f394c5a5-71c4-413b-8939-f8b03e00b527.webp" alt="" />
                </div>
                <button className='absolute bg-white px-4 py-2 bottom-5 left-1/2 transform -translate-x-9 cursor-pointer'>Serum</button>
            </div>
            <div className='flex flex-col justify-center items-center text-center'>
                <p>VITAL CATEGORIES</p>
                <h2 className='text-4xl mt-2'>Worldwide Beauty Collection</h2>
            </div>
            <div className='overflow-hidden h-[350px] relative'>
                <div className='relative'>
                    <img className='transition-transform ease-in-out duration-500 scale-105 hover:translate-x-2 h-full' src="https://i.ibb.co/23TQ3Z43/Photo-bcc348e9-c2da-4b4a-b8c0-cb7f2d3210b5.webp" alt="" />
                </div>
                 <button className='absolute bg-white px-4 py-2 bottom-5 left-1/2 transform -translate-x-12 cursor-pointer'>Moisturizer</button>
            </div>
            <div className='overflow-hidden h-[350px] relative'>
                <div className='relative'>
                    <img className='transition-transform ease-in-out duration-500 scale-105 hover:translate-x-2 h-full' src="https://i.ibb.co/4gXgjMZ6/63d7779a1e6a376c97527cfb8a06837c-jpg-720x720q80.jpg" alt="" />
                </div>
                <button className='absolute bg-white px-4 py-2 bottom-5 left-1/2 transform -translate-x-12 cursor-pointer'>Face Wash</button>
            </div>
            <div className='overflow-hidden h-[350px] relative'>
                <div className='relative'>
                    <img className='transition-transform ease-in-out duration-500 scale-105 hover:translate-x-2 h-full' src="https://i.ibb.co/qYGD1Bc6/PRA-0220.jpg" alt="" />
                </div>
                <button className='absolute bg-white px-4 py-2 bottom-5 left-1/2 transform -translate-x-12 cursor-pointer'>Sunscreen</button>
            </div>
        </div>
    );
};

export default Categories;
