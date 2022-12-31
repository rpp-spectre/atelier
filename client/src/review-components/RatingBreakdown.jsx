import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';

function RatingBreakdown(props) {

  const [toggleState, setToggleState] = useState('true');
  function toggleRating(e) {
    setToggleState(JSON.stringify(!(e.target.className === 'true')));
  }

  let percentage=Number.parseFloat(props.ratings)/props.totalRatings * 100;
  return (
    <div className='rating'>
      <button className={toggleState} value={props.star} onClick={(e) => {props.handleFilter(e); toggleRating(e)}}>{props.star} stars</button>
    <span className='rating-bar'>
      <hr className='grey-bar'/>
      <hr className='green-bar' style={{width: percentage + '%'}}/>
    </span>
     ({props.ratings})
    </div>
  )
}

export default RatingBreakdown;