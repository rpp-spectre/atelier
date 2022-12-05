import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import PortalReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';


const Addqform2 = (props)=>{
  if(!props.show) {
    return null;
  }


  return (

    <div className='modal'>
      <div className='modal-content'>
        <div className='modal-header'>
          <h4 className='modal-title'>
            Add a Question
          </h4>
        </div>
        <div className='modal-body'>
           <form>
             <label>
               Your Question:
               <textarea
               cols="48"
               rows="8"
               name="question"
               placeholder="..."
               required
               autoComplete="off"
               // value ={}
               // onChange = {(e)=>{ setContent(e.target.value); }}
             />
             </label>
             <label>
              Your Nickname:

              <input
              type="text"
              name="nickname"
              placeholder="your nickname"
              required
              autoComplete="off"
              // value ={}
              // onChange = {(e)=>{ setTitle(e.target.value); }}
              />
             </label>
             <label>
              Your Email:

              <input
              type="text"
              name="email"
              placeholder="abc@abc.com"
              required
              autoComplete="off"
              // value ={}
              // onChange = {(e)=>{ setTitle(e.target.value); }}
              />
             </label>
           </form>
        </div>
        <div className='model-footer'>
          <button onClick={props.onClose} className='button'>Submit</button>
        </div>
      </div>
    </div>


  );
};

export default Addqform2;