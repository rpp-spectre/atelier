import React, {useState, useEffect} from 'react';
import ReactDom from 'react-dom/client';

const Ahcounter = ({acounter}) =>{
  const [ahcounter, setAhcounter] = useState(acounter);
  return (
    <>

    <span className ='underline' onClick={()=>{setAhcounter(ahcounter+1)}}>Helpful </span>( {ahcounter})
    </>
  );
};

export default Ahcounter;