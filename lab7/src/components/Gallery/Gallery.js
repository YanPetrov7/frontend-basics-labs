import React from 'react';
import GoodsCard from '../GoodsCard/GoodsCard';
import './Gallery.css';

const Gallery = () => {
  const goodsData = [
    { id: 1, name: 'Apple', price: 20, image: '/img/apple.png' },
    { id: 2, name: 'Bread', price: 30, image: '/img/bread.png' },
    { id: 3, name: 'Rice', price: 25, image: '/img/rice.png' },
    { id: 4, name: 'Fish', price: 40, image: '/img/fish.png' },
    { id: 5, name: 'Meat', price: 35, image: '/img/meat.png' },
    { id: 6, name: 'Grape', price: 50, image: '/img/grape.png' },
  ];

  return (
    <div className='gallery'>
      {goodsData.map((item) => (
        <GoodsCard
          key={item.id}
          name={item.name}
          price={item.price}
          image={item.image}
        />
      ))}
    </div>
  );
};

export default Gallery;
