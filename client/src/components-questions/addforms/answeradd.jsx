import React, {useState, useEffect} from 'react';
import ReactDom from 'react-dom/client';
import Addaform from './addaform.jsx';

const Answeradd = ()=>{
  const [show, setShow] = useState(false);

  return (<>
    {/* <form>
  <button onClick={()=>{}}>ADD A QUESTION +</button>
</form> */}
    <span className='underline' onClick={()=>{setShow(true)}}> Add Answer </span>
    <Addaform onClose={()=>{setShow(false)}} show={show} />
  </>);
};

export default Answeradd;