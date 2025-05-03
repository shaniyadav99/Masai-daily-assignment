import React, { useEffect } from 'react';
import axios from 'axios'
export const Product = () => {
    async function fetching() {
        let data=await axios.get('https://rickandmortyapi.com/api/character');
        console.log(data.data.results);
    }
    useEffect(()=>{
        fetching();
    },[])
  return (
    <div>
        <h1>Hello World</h1>
    </div>
  )
}
