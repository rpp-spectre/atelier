import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';

function RatingBreakdown(props) {
  let percentage=Number.parseFloat(props.ratings)/props.totalRatings * 100;
  return (
    <div className='rating'>
      {props.star} stars
    <span className='rating-bar'>
      <hr id='grey-bar'/>
      <hr id='green-bar' style={{width: percentage + '%'}}/>
    </span>
     ({props.ratings})
    </div>
  )
}

export default RatingBreakdown;