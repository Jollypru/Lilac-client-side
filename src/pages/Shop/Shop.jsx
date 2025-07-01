import { useEffect, useState } from "react";
import { FaArrowRight, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router";

const Shop = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('/public/Products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <div className="bg-[url(https://i.ibb.co/4gKdxDvW/elegant-skin-care-banner-design.jpg)] h-[250px] w-full bg-cover bg-center flex items-center justify-center">
                <h1 className="text-6xl font-semibold text-white">Shop</h1>
            </div>

            <div className="p-5 grid grid-cols-1 md:grid-cols-4">
                {
                    products.map((product, index) => <div key={index} className="border border-gray-300 p-4 flex flex-col group relative">
                        <div className="relative">
                            <img className="h-[250px] w-full opacity-100 group-hover:opacity-0" src={product.images[0]} alt="" />
                            <img className="h-[250px] w-full opacity-0 group-hover:opacity-100 absolute top-0 transition-all duration-1000" src={product.images[1]} alt="" />
                        </div>
                        <div className="flex gap-3 absolute top-1/2 translate-x-1/2 transition-all duration-1000 opacity-0 group-hover:opacity-100">
                            <button className=" bg-white rounded-full p-2"><FaRegHeart></FaRegHeart></button>
                            <Link to={`/products/${product.sku}`}><button className=" bg-white rounded-full p-2"><FaArrowRight /></button></Link>
                        </div>
                        <h1 className="text-lg font-semibold grow mt-2">{product.name}</h1>
                        <p className="text-amber-600 text-sm">${product.price}</p>
                    </div>)
                }

            </div>
        </div>
    );
};

export default Shop;