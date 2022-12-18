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
  var handleSubmit=()=>{
    axios.post(`http://localhost:3000/questions?body=${body}&name=${name}&email=${email}&product_id=${pid}`)
    .then((result) =>{
     console.log('in forms');
      console.log(result);
      })
    .catch(err=>{
      throw err;
      });
  };


  return (

    <div className='modal'>
      <div className='modal-content'>
        <div className='modal-header'>
          <h4 className='modal-title'>
            Add Your Question
          </h4>
          About the {product}
        </div>
        <div className='modal-body'>
           <form onSubmit={(e)=>{

            handleSubmit();
           }}>
             <label>
             &#42; Your Question:
               <textarea
               cols="50"
               rows="20"
               maxLength='1000'
               name="body"
               placeholder="Why did you like the product or not"
               required
               autoComplete="off"
               value ={body}
               onChange = {(e)=>{ setBody(e.target.value); }}
             />
             </label>
             <br />
             <label>
             &#42; Your Nickname:

              <input
              type="text"
              name="name"
              maxLength='60'
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
             &#42; Your Email:

              <input
              type="email"
              name="email"
              maxLength='60'
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
               <button onClick={()=>{onClose()}}> Cancel</button>
             </div>
           </form>
        </div>

      </div>
    </div>


  );
};

export default Addqform2;