import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';

function RatingBreakdown(props) {
  function handleFilter(e) {
    console.log(e.target.value);
  }

  let percentage=Number.parseFloat(props.ratings)/props.totalRatings * 100;
  return (
    <div className='rating'>
      <button value={props.star} onClick={handleFilter}>{props.star} stars</button>
    <span className='rating-bar'>
      <hr className='grey-bar'/>
      <hr className='green-bar' style={{width: percentage + '%'}}/>
    </span>
     ({props.ratings})
    </div>
  )
}

export default RatingBreakdown;