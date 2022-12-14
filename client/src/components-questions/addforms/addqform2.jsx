import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import PortalReactDOM from 'react-dom';
import axios from 'axios';
// import { CSSTransition } from 'react-transition-group';


const Addqform2 = ({onClose, show,pid, product, handleClickTracking})=>{
  const [body, setBody] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  if(!show) {
    return null;
  }
  var handleSubmit=(e)=>{
    handleClickTracking(e);
    axios.post(`/questions?body=${body}&name=${name}&email=${email}&product_id=${pid}`)
    .then((result) =>{
     console.log('in forms');
      console.log(result);
      })
    .catch(err=>{
      throw err;
      });
  };


  return (

    <div className='modal form'>
      <div className='modal-content'>
        <div className='modal-header'>
          <h4 className='modal-title'>
            Add Your Question
          </h4>
          About the {product}
        </div>
        <div className='modal-body'>
           <form onSubmit={(e)=>{

           }}>
             <label>
             &#42; Your Question:
             <br />
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
             &#42; Your Nickname:<br />

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
              <span className ="notetext">For privacy reasons, do not use your full name or email address</span>
             </label>
             <br />
             <label>
             &#42; Your Email:<br />

              <input
              type="email"
              name="email"
              maxLength='60'
              placeholder="Example: jack@email.com"
              required
              autoComplete="off"
              value ={email}
              onChange = {(e)=>{ setEmail(e.target.value);}}
              />
              <br />
              <span className="notetext">For authentication reasons, you will not be emailed</span>
             </label>
             <div className='model-footer'>
               <button onClick={()=>{onClose()}}> Cancel</button>
               <button  type="submit" className='button'>Submit</button>

             </div>
           </form>
        </div>

      </div>
    </div>


  );
};

export default Addqform2;