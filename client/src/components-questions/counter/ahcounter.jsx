import React, {useState, useEffect} from 'react';
import ReactDom from 'react-dom/client';
import axios from 'axios';

const Ahcounter = ({acounter, aid, handleClickTracking}) =>{
  const [ahcounter, setAhcounter] = useState(acounter);
  const [ah, setAh] = useState(true);

  const updateA = ()=>{
    if(ah) {
      let apiCH = `/answers/${aid}/helpful`;
      axios.put(apiCH)
       .then((result)=>{
       console.log(result);
       setAh(false);
     // res.send('helpfulness updated');
       })
       .catch((error) =>{
         throw(error);
         });
    }

  };


  return (
    <>
    Helpful? <span className ='underline' onClick={(e)=>{handleClickTracking(e);if(ah){setAhcounter(ahcounter+1)}; updateA()}}>Yes</span>({ahcounter})
    </>
  );
};

export default Ahcounter;