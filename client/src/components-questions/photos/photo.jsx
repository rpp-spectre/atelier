import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import PortalReactDOM from 'react-dom';
// import { CSSTransition } from 'react-transition-group';


const Photo = ({onClose, show, image})=>{
  if(!show) {
    return null;
  }


  return (

    <div className='modal'>
      <div className='modal-content'>

        <div className='modal-body'>
           <img src={image} />

        </div>
        <div className='model-footer'>
          <button onClick={onClose} className='button'>&times;</button>
        </div>
      </div>
    </div>


  );
};

export default Photo;