import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import PortalReactDOM from 'react-dom';
import axios from 'axios';
// import { CSSTransition } from 'react-transition-group';


const Addqform2 = ({onClose, show,pid, product})=>{
  const [body, setBody] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
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
          About {product}
        </div>
        <div className='modal-body'>
           <form onSubmit={(e)=>{
            //  e.preventDefault();
             axios.post(`http://localhost:3000/questions?body=${'body'}&name=${name}&email=${email}&product_id=${pid}`)
               .then((result) =>{
                console.log('test');
                 console.log(result);
                 })
               .catch(err=>{
                 throw err;
                 });
           }}>
             <label>
               Your Question:
               <textarea
               cols="48"
               rows="8"
               name="body"
               placeholder="..."
               required
               autoComplete="off"
               value ={body}
               onChange = {(e)=>{ setBody(e.target.value); }}
             />
             </label>
             <br />
             <label>
              Your Nickname:

              <input
              type="text"
              name="name"
              placeholder="Example: jackson11!"
              required
              autoComplete="off"
              value ={name}
              onChange = {(e)=>{ setName(e.target.value); }}
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
              value ={email}
              onChange = {(e)=>{ setEmail(e.target.value); }}
              />
              <br />
              For authentication reasons, you will not be emailed
             </label>
             <div className='model-footer'>
               <button  type="submit" className='button'>Submit</button>
             </div>
           </form>
        </div>

      </div>
    </div>


  );
};

export default Addqform2;