import React, {useState, useEffect} from 'react';
import ReactDom from 'react-dom/client';
import axios from 'axios';

const Ahcounter = ({acounter, aid}) =>{
  const [ahcounter, setAhcounter] = useState(acounter);

  const updateA = ()=>{
    let apiCH = `http://localhost:3000/answers/${aid}/helpful`;
     axios.put(apiCH)
      .then((result)=>{
      console.log(result);
    // res.send('helpfulness updated');
      })
      .catch((error) =>{
        throw(error);
        });
  };


  return (
    <>

    <span className ='underline' onClick={()=>{setAhcounter(ahcounter+1); updateA()}}>Helpful </span>( {ahcounter})
    </>
  );
};

export default Ahcounter;