import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';

//to use in any component, pass the rating into props as rating='<Float>'

function Stars(props) {
  let percentage = Number.parseFloat(props.rating)/5 * 100;
  let filledStars = ['\u2605', '\u2605', '\u2605', '\u2605', '\u2605'].join('');
  let emptyStars = ['\u2606', '\u2606', '\u2606', '\u2606', '\u2606'].join('');

  return (
    <div className='stars'>
      <div className='empty-star'>{emptyStars}</div>
      <div className='half-star' style={{width:percentage+'%'}}>{filledStars}</div>
    </div>
  )
};

export default Stars;