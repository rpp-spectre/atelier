import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';

function ImageModal(props) {
  return (
    <div className ='modal'>
      <div className='modal-content'>
        <div className='modal-body'>
          <img className='expandedImage' src={props.img} />
        </div>
        <button onClick={props.onClose}>Close</button>
      </div>
    </div>
  )
}

export default ImageModal;