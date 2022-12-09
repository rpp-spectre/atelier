import React, {useState, useEffect} from 'react';
import ReactDom from 'react-dom/client';

const Qhcounter = ({qcounter}) =>{
  const [qhcounter, setQhcounter] = useState(qcounter);



  return (
    <>
    <span className ='underline' onClick={()=>{setQhcounter(qhcounter+1)}}>Yes </span>( {qhcounter})
    </>
  );
};

export default Qhcounter;

