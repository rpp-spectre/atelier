import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import PortalReactDOM from 'react-dom';
// import { CSSTransition } from 'react-transition-group';


const Addaform = (props)=>{
  if(!props.show) {
    return null;
  }


  return (

    <div className='modal'>
      <div className='modal-content'>
        <div className='modal-header'>
          <h4 className='modal-title'>
            Submit Your Answer
          </h4>
          [Product Name]: [Question Body]
        </div>
        <div className='modal-body'>
           <form>
             <label>
               Your Answer:
               <textarea
               cols="50"
               rows="20"
               name="answer"
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
          <button onClick={props.onClose} className='button'>Submit</button>
        </div>
      </div>
    </div>


  );
};

export default Addaform;