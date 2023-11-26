import React, { useState } from 'react';
import './Image.css';

const Image = () => {
  const [imageWidth, setImageWidth] = useState(300);
  const [images, setImages] = useState([{ id: 1, width: imageWidth }]);

  const handleAdd = () => {
    setImages((prevImages) => [
      ...prevImages,
      { id: new Date().getTime(), width: imageWidth },
    ]);
  };

  const handleEnlarge = () => {
    const newWidth = imageWidth + 50;
    setImageWidth(newWidth);
    setImages((prevImages) =>
      prevImages.map((image) => ({ ...image, width: newWidth }))
    );
  };

  const handleReduce = () => {
    const newWidth = Math.max(50, imageWidth - 50);
    setImageWidth(newWidth);
    setImages((prevImages) =>
      prevImages.map((image) => ({ ...image, width: newWidth }))
    );
  };

  const handleDelete = () => {
    if (images.length > 0) {
      setImages((prevImages) => prevImages.slice(0, -1));
    }
  };

  return (
    <div>
      <h2>Улюблене місто де я був:</h2>
      <p>
        Рим - це одне з найбільш вражаючих та історичних міст у світі. Він
        відомий своєю багатою культурною спадщиною, колизіями римської
        архітектури, античними пам'ятками, та чудовими вуличками. Плаваючи в
        атмосфері столітніх легенд та історії, Рим пропонує безмежні можливості
        для дослідження. Від Колізею до Форуму Романо та Ватикану, кожен крок в
        цьому місті призводить до захоплюючого відкриття. Рим завжди залишає
        незабутнє враження своєю красою та історією, і це одне з моїх улюблених
        місць на планеті.
      </p>
      <div id='imageContainer'>
        {images.map((image) => (
          <img
            key={image.id}
            className='picture'
            src='/img/rome.jpg'
            alt='Photo of Rome'
            style={{ width: `${image.width}px` }}
          />
        ))}
      </div>
      <div>
        <button onClick={handleAdd}>add</button>
        <button onClick={handleEnlarge}>enlarge</button>
        <button onClick={handleReduce}>reduce</button>
        <button onClick={handleDelete}>delete</button>
      </div>
      <p>
        Фото міста доступне{' '}
        <a
          href='https://www.google.com/maps/place/%D0%A0%D0%B8%D0%BC,+%D0%86%D1%82%D0%B0%D0%BB%D1%96%D1%8F/@41.9100711,12.5359979,11z/data=!3m1!4b1!4m6!3m5!1s0x132f6196f9928ebb:0xb90f770693656e38!8m2!3d41.9027835!4d12.4963655!16zL20vMDZjNjI?entry=ttu'
          target='_blank'
          rel='noreferrer'
        >
          за посиланням
        </a>
        .
      </p>
    </div>
  );
};

export default Image;
