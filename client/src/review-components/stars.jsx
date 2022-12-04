import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';

//to use in any component, pass the rating into props as rating='<Float>'

function Stars(props) {
  let filled = Math.round(Number.parseFloat(props.rating));
  let empty = 5 - filled;
  let starArray = ['\u2605', '\u2605', '\u2605', '\u2605', '\u2605'];
  starArray.fill('\u2606', filled);
  let starString = starArray.join('');

  return (
    <span>{starString}</span>
  )
};

export default Stars;

//or use overlay and change width to percentage?