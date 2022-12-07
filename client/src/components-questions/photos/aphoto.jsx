import React, {useState, useEffect} from 'react';
import ReactDom from 'react-dom/client';
import Photo from './photo.jsx';

const Aphoto = ({img}) =>{
  const [show, setShow] = useState(false);

  var image = img.url;
  return (< >
   <img className='thumbnail' src={image} onClick={()=>{setShow(true)}} />
   <Photo onClose={()=>{setShow(false)}} show={show} image={image} />
  </>);

};

export default Aphoto;