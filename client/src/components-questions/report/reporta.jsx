import React, {useState, useEffect} from 'react';
import ReactDom from 'react-dom/client';
import axios from 'axios';

const Reporta = ({aid}) =>{

  const [rep, setRep] = useState('Report');
  const [showr, setShowr] = useState(true);


  const handleClick = () =>{
    if (showr) {
      let apiRA = `http://localhost:3000/answers/${aid}/report`;
      axios.put(apiRA)
       .then((result)=>{
       console.log(result);
       setShowr(false);
       setRep('Reported');
       })
       .catch((error) =>{
         throw(error);
         });
    }

  }

  return(
    <>
   <span className='underline' onClick = {
    () => {handleClick()}
   } >
   {rep}
   </span>
   </>
  );
}

export default Reporta;