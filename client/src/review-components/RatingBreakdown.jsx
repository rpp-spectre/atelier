import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';

function RatingBreakdown(props) {

  const [toggleState, setToggleState] = useState('true');
  if (toggleState !== 'true' && props.filterApplied === 'false') {
    setToggleState('true');
  }
  function toggleRating(e) {
    setToggleState(!(e.target.className === 'true filter reviews'));
  }

  let percentage=Number.parseFloat(props.ratings)/props.totalRatings * 100;
  return (
    <div className='rating'>
      <button className={toggleState + ' filter reviews'} value={props.star} onClick={(e) => {props.handleFilter(e); toggleRating(e); props.handleClickTracking(e);}}>{props.star} stars</button>
    <span className='rating-bar'>
      <hr className='grey-bar'/>
      <hr className='green-bar' style={{width: percentage + '%'}}/>
    </span>
     ({props.ratings})
    </div>
  )
}

export default RatingBreakdown;