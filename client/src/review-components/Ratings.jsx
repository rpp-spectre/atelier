import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import Stars from './Stars.jsx';

function Ratings(props) {
  return (
  <div className='ratings'>
    <h1>3.5 <Stars rating='3.5'/></h1>


    <div>100% of reviews recommend this product</div>
    <div>Rating breakdown bars</div>
  </div>
  )
}

export default Ratings;