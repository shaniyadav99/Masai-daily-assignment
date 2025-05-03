import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Product.css';

export const Product = () => {
  const [info, setInfo] = useState([]);

  async function fetching() {
    let data = await axios.get('https://rickandmortyapi.com/api/character');
    let finald = data.data.results;
    setInfo(finald);
  }

  useEffect(() => {
    fetching();
  }, []);

  return (
    <div className="product-container">
      {info.map((ele, key) => (
        <div className="card" key={key}>
          <img src={ele.image} alt={ele.name} className="character-img" />
          <h3>{ele.name}</h3>
          <h4>Status: {ele.status}</h4>
          <h4>Gender: {ele.gender}</h4>
          <div className="episode-slider">
            {ele.episode.slice(0, 10).map((ep, index) => (
              <div className="episode" key={index}>
                Ep {index + 1}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
