import React, {useState, useEffect} from 'react';
import ReactDom from 'react-dom/client';
import Aphoto from './aphoto.jsx';

const Aphotos = ({photos}) =>{
  return (
    <div>
    {photos.map((photo) =>{
      return <Aphoto img={photo} key={photo.id}/>
    })
  }
  </div>
  );

};

export default Aphotos;