import React from 'react';
import ReactDOM from 'react-dom/client';

function ProductBreakdown(props) {
  return (
    <div className='breakdown'>
      Size
    <div className='product-breakdown'>
    <div className='breakdown-bar'>
      <hr className='productbreakdown-bar'/>
      <hr className='productbreakdown-bar'/>
      <hr className='productbreakdown-bar'/>
    </div>
      <div className='pointer'>{'\u25BC'}</div>
    </div>
    Too small Perfect Too Large
    </div>
  )
}

export default ProductBreakdown;