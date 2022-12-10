import React from 'react';
import ReactDOM from 'react-dom/client';
import ProductBreakdown from './ProductBreakdown.jsx';

function ProductBreakdownList(props) {
  return Object.entries(props.data.characteristics).map((element, index) => {
    return (<ProductBreakdown key={index} data={element}/>)
  })
}

export default ProductBreakdownList;