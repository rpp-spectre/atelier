import React, {useState, useEffect} from 'react';
import ReactDom from 'react-dom/client';
import Addaform from './addaform.jsx';

const Answeradd = ({pid, qid, qbody, product,handleClickTracking})=>{
  const [show, setShow] = useState(false);

  return (<>
    {/* <form>
  <button onClick={()=>{}}>ADD A QUESTION +</button>
</form> */}
    <span className='underline questions' onClick={(e)=>{handleClickTracking(e); setShow(true)}}> Add Answer </span>
    <Addaform onClose={()=>{setShow(false)}} show={show} pid ={pid} qid={qid} product={product} qbody={qbody} />
  </>);
};

export default Answeradd;