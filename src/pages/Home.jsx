import React from 'react';
import Products from './Products';
const Home = () => {
  return (
    <div style={{backgroundColor:"blue", padding:"5px"}}>
      <h2>Home Page</h2>
      <p>Welcome to the Home Page!</p>
      <Products name="sami ahmed"/>
    </div>
  );
};

export default Home;
