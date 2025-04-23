import React, { useEffect, useState } from 'react';

export const Product = () => {
    const [product, setProduct] = useState([]);

    async function fetchP() {
        try {
            const res = await fetch('https://dummyjson.com/products');
            const data = await res.json();
            setProduct(data.products); 
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchP();
    }, []);

    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Product List</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {product.map((ele, key) => (
                    <div key={key} className="bg-white p-4 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
                        <img src={ele.images[0]} alt={ele.title} className="w-full h-48 object-cover rounded-xl mb-4" />
                        <h3 className="text-lg font-semibold text-gray-800">{ele.title}</h3>
                        <p className="text-sm text-gray-500 mb-2">{ele.brand}</p>
                        <p className="text-gray-600 text-sm mb-2">{ele.description.slice(0, 100)}...</p>
                        <div className="flex flex-col gap-1 text-sm text-gray-700">
                            <span><strong>Category:</strong> {ele.category}</span>
                            <span><strong>Price:</strong> ₹{ele.price}</span>
                            <span><strong>Rating:</strong> ⭐ {ele.rating}</span>
                            <span><strong>Discount:</strong> {ele.discountPercentage}%</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
