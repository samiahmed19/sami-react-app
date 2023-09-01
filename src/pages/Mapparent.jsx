import React from 'react';
import Mapchild from './Mapchild';

const Mapparent = () => {
  const parentItems = ['iphone xr20 max', 'redmi note 15 pro max','samsung','pixels','motorola','nothing phone','one plus'];

  return (
    <div>
      <h1>Mapparent components</h1>
      <ul>
        {parentItems.slice(0, 3).map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <Mapchild childItems={parentItems} />
    </div>
  );
};

export default Mapparent;
