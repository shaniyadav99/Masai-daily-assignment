import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const Product = () => {
    const [product,setProduct]=useState([]);
    async function fetchP() {
        try {
            const res = await fetch('https://dummyjson.com/products');
            const data = await res.json();
            setProduct(data.products); 
            console.log(data.products);
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        fetchP();
    },[])
  return (
    <div>
        {
            product.map((ele,key)=>{
                <>
                
                <img src={ele.images} alt="data" />
                <h3 key={key}>{ele.title}</h3>
                </>
            })
        }
    </div>
  )
}
