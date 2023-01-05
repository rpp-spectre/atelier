import React, {useState, useEffect} from 'react';
import ReactDom from 'react-dom/client';
import axios from 'axios';

const Reporta = ({aid,handleClickTracking}) =>{

  const [rep, setRep] = useState('Report');
  const [showr, setShowr] = useState(true);


  const handleClick = () =>{

    if (showr) {

      let apiRA = `/answers/${aid}/report`;
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
   <span className='underline questions' onClick = {
    (e) => {handleClickTracking(e); handleClick()}
   } >
   {rep}
   </span>
   </>
  );
}

export default Reporta;