import React from 'react';

const Mapchild = (props) => {
  return (
    <div>
      <h2>Mapchild components</h2>
      <ul>
        {props.childItems.slice(3, 5).map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Mapchild;
