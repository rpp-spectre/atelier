import React, {useState, useEffect} from 'react';
import ReactDom from 'react-dom/client';
import Addqform2 from './addqform2.jsx';

const Qadd = ()=>{
  const [show, setShow] = useState(false);

  return (<>
    {/* <form>
  <button onClick={()=>{}}>ADD A QUESTION +</button>
</form> */}
    <button onClick={()=>{setShow(true)}}> ADD A QUESTION </button>
    <Addqform2 onClose={()=>{setShow(false)}} show={show} />
  </>);
};

export default Qadd;