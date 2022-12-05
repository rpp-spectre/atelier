import React, {useState, useEffect} from 'react';
import ReactDom from 'react-dom/client';

const Aphoto = ({img}) =>{

  var image = img.url;
  return (< >
   <img src={image} />
  </>);

};

export default Aphoto;