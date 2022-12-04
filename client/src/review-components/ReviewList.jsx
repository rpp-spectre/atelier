import React from 'react';
import ReactDOM from 'react-dom/client';
import Reviews from './Reviews.jsx';

function ReviewList(props) {
  return props.props.map((element, index) => {
    return <div key={index}>{element}</div>
  })
};

export default ReviewList;