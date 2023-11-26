import React from 'react';
import Header from '../Header/Header';
import Content from '../Content/Content';
import Image from '../Image/Image';
import Gallery from '../Gallery/Gallery';

import './App.css';

function App() {
  return (
    <div className='container'>
      <Header />
      <Content />
      <Image />
      <Gallery />
    </div>
  );
}

export default App;
