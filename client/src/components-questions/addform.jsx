import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import PortalReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';


const Addform = (props)=>{
  // if(!props.show) {
  //   return null;
  // }
  const closeOnEscapeKeyDown = e => {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);


  return ReactDOM.createPortal(
    <CSSTransition
      in={props.show}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
    >
    <div className='modal'>
      <div className='modal-content'>
        <div className='modal-header'>
          <h4 className='modal-title'>
            Add a Question
          </h4>
        </div>
        <div className='modal-body'>
           <form>
            <label></label>
            <textarea></textarea>
           </form>
        </div>
        <div className='model-footer'>
          <button onClick={props.onClose} className='button'>Submit</button>
        </div>
      </div>
    </div>
    </CSSTransition>,
    document.getElementById("root")
  );
};

export default Addform;