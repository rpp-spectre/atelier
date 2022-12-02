import React from 'react';
import ReactDOM from 'react-dom/client';
import Reviews from './Reviews.jsx';

//this will be where reviews will be mapped into a list view

//load more button here?

function ReviewList(props) {
  return props.props.map((element) => {
    return <div>{element}</div>
  })
  // return <div>
  //   <Reviews />
  //   <Reviews />
  // </div>
};

export default ReviewList;