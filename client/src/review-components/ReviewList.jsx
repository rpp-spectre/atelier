import React from 'react';
import ReactDOM from 'react-dom/client';
import Reviews from './Reviews.jsx';

//this will be where reviews will be mapped into a list view

//load more button here?

function ReviewList(props) {
  return props.props.map((element, index) => {
    return <div key={index}>{element}</div>
  })
};

export default ReviewList;