import React, {useState, useEffect} from 'react';
import ReactDom from 'react-dom/client';
import Addqform2 from './addqform2.jsx';

const Qadd = ({pid, product, handleClickTracking})=>{
  const [show, setShow] = useState(false);

  return (<>
    {/* <form>
  <button onClick={()=>{}}>ADD A QUESTION +</button>
</form> */}
    <button className="question" onClick={(e)=>{handleClickTracking(e); setShow(true); }}> Add A Question + </button>
    <Addqform2 onClose={()=>{setShow(false); }} show={show} pid={pid} product={product} handleClickTracking={handleClickTracking} />
  </>);
};

export default Qadd;