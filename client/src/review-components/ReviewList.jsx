import React from 'react';
import ReactDOM from 'react-dom/client';
import Reviews from './Reviews.jsx';

//this will be where reviews will be mapped into a list view

//load more button here?

function ReviewList(props) {
  return <div>
    <p>Individual Review tiles go here</p>
    <Reviews />
    <Reviews />
  </div>
};

export default ReviewList;