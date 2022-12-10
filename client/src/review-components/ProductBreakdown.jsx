import React from 'react';
import ReactDOM from 'react-dom/client';

function ProductBreakdown(props) {
  let percentage = (props.data[1].value - 1) / 4 * 100 - 2;
  let charDetails = {
    Size: ['A size too small', 'Perfect', 'A size too wide'],
    Width: ['Too narrow', 'Perfect', 'Too wide'],
    Comfort: ['Uncomfortable', 'Ok', 'Perfect'],
    Quality: ['Poor', 'What I expected', 'Perfect'],
    Length: ['Runs short', 'Perfect', 'Runs long'],
    Fit: ['Runs tight', 'Perfect', 'Runs loose']
  }

  return (
    <div className='breakdown'>
      {props.data[0]}
    <div className='product-breakdown'>
    <div className='breakdown-bar'>
      <hr className='productbreakdown-bar'/>
      <hr className='productbreakdown-bar'/>
      <hr className='productbreakdown-bar'/>
    </div>
      <div className='pointer' style={{marginLeft: percentage +'%'}}>{'\u25BC'}</div>
    </div>
    {/* if statements based on characteristics?? */}
    <div className='char-details'>
      <div>{charDetails[props.data[0]][0]}</div>
      <div>{charDetails[props.data[0]][1]}</div>
      <div>{charDetails[props.data[0]][2]}</div>
    </div>
    </div>
  )
}

export default ProductBreakdown;