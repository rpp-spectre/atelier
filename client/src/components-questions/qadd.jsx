import React, {useState, useEffect} from 'react';
import ReactDom from 'react-dom/client';
import Addform from './addform.jsx';

const Qadd = ()=>{
  const [show, setShow] = useState(false);

  return (<div>
    {/* <form>
  <button onClick={()=>{}}>ADD A QUESTION +</button>
</form> */}
    <button onClick={()=>{setShow(true)}}> ADD A QUESTION </button>
    <Addform onClose={()=>{setShow(false)}} show={show} />
  </div>);
};

export default Qadd;