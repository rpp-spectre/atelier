import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import PortalReactDOM from 'react-dom';
// import { CSSTransition } from 'react-transition-group';


const Addqform2 = ({onClose, show})=>{
  if(!show) {
    return null;
  }


  return (

    <div className='modal'>
      <div className='modal-content'>
        <div className='modal-header'>
          <h4 className='modal-title'>
            Add Your Question
          </h4>
          About [product]
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
             <br />
             <label>
              Your Nickname:

              <input
              type="text"
              name="nickname"
              placeholder="Example: jackson11!"
              required
              autoComplete="off"
              // value ={}
              // onChange = {(e)=>{ setTitle(e.target.value); }}
              />
              <br />
              For privacy reasons, do not use your full name or email address
             </label>
             <br />
             <label>
              Your Email:

              <input
              type="text"
              name="email"
              placeholder="Example: jack@email.com"
              required
              autoComplete="off"
              // value ={}
              // onChange = {(e)=>{ setTitle(e.target.value); }}
              />
              <br />
              For authentication reasons, you will not be emailed
             </label>
           </form>
        </div>
        <div className='model-footer'>
          <button onClick={onClose} className='button'>Submit</button>
        </div>
      </div>
    </div>


  );
};

export default Addqform2;