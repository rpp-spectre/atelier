import React, {useState, useEffect} from 'react';
import ReactDom from 'react-dom/client';
import Aphoto from './aphoto.jsx';

const Aphotos = ({photos, handleClickTracking}) =>{
  return (
    <div role="group">
    {photos.map((photo) =>{
      return <Aphoto img={photo} key={photo.id} handleClickTracking={handleClickTracking} />
    })
  }
  </div>
  );

};

export default Aphotos;