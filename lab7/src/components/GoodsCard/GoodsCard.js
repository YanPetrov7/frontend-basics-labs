import React from 'react';
import './GoodsCard.css';

const GoodsCard = ({ image, name, price }) => {
  return (
    <div className='goods-card'>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>Price: ${price}</p>
    </div>
  );
};

export default GoodsCard;
