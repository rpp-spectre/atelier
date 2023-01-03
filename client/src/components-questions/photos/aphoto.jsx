import React, {useState, useEffect} from 'react';
import ReactDom from 'react-dom/client';
import Photo from './photo.jsx';

const Aphoto = ({img, handleClickTracking}) =>{
  const [show, setShow] = useState(false);

  var image = img.url;
  return (< >
   <img className='thumbnail' src={image} onClick={(e)=>{handleClickTracking(e);setShow(true)}} />
   <Photo onClose={(e)=>{handleClickTracking(e);setShow(false)}} show={show} image={image} />
  </>);

};

export default Aphoto;