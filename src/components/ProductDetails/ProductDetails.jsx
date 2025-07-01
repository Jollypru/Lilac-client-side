import { useLoaderData, useParams } from 'react-router';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { FaRegHeart } from 'react-icons/fa';
import { PiPackage } from "react-icons/pi";
import { CiClock2 } from "react-icons/ci";

const ProductDetails = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const product = data.find(p => p.sku === id)
    return (
        <div className='grid grid-cols-1 md:grid-cols-7 gap-6 my-8 mx-12'>
            <div className='col-span-4'>
                <img className='h-[100vh] w-full' src={product.images[0]} alt="" />
            </div>
            <div className='col-span-3 space-y-1.5'>
                <h1 className='text-2xl font-medium'>{product.name}</h1>
                <p>By <span className='text-yellow-600'>{product.brand}</span></p>
                <div className='flex items-center gap-1'>
                    <Rating
                        style={{ maxWidth: 120 }}
                        value={product.rating}
                        readOnly
                    ></Rating>
                    <span className='text-sm'>({product.reviews} customer review)</span>
                </div>
                <p className='text-yellow-700 text-2xl'>${product.price}</p>
                <hr className='text-gray-300'/>
                <p className='text-gray-700 my-4'>{product.description}</p>
                <div className='flex items-center gap-3'>
                    <div className='border border-gray-400 p-2 px-4 flex gap-6'>
                        <span>-</span>
                        <span>1</span>
                        <span>+</span>
                    </div>
                    <button className='p-2 px-24 bg-[#e07540] border border-[#e07540] text-white hover:bg-white hover:text-[#e07540] cursor-pointer'>Add to Cart</button>
                    <button className='p-3 px-4 border border-gray-400'><FaRegHeart /></button>
                </div>
                <button className='w-full my-4 border border-gray-300 p-2 text-gray-800 hover:bg-[#e07540] hover:text-white cursor-pointer'>Buy Now</button>

                <p className='flex items-center gap-2 text-gray-700'><PiPackage className='text-black' />{product.checkout.shippingInfo}</p>
                <p className='flex items-center gap-2 text-gray-700 mb-3'><CiClock2 className='text-black' />{product.checkout.delivery}</p>
                <hr className='text-gray-300' />
                <p className='text-gray-700 text-sm mt-4'>SKU : <span className='text-black'>{product.sku}</span></p>
                <p className='text-gray-700 text-sm'>Category : <span className='text-black'>{product.categories?.join(" , ")}</span></p>
                <p className='text-gray-700 text-sm'>Tags : <span className='text-black'>{product.tags?.join(" , ")}</span></p>
                
            </div>
        </div>
    );
};

export default ProductDetails;