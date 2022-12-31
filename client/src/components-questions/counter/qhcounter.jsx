import React, {useState, useEffect} from 'react';
import ReactDom from 'react-dom/client';
import axios from 'axios';

const Qhcounter = ({qcounter, qid}) =>{
  const [qhcounter, setQhcounter] = useState(qcounter);
  const [qh, setQh] = useState(true);

  const updateH = ()=>{
    let apiCH = `http://localhost:3000/questions/${qid}/helpful`;
     axios.put(apiCH)
      .then((result)=>{
        setQh(false);
        console.log(result);
    // res.send('helpfulness updated');
      })
      .catch((error) =>{
        throw(error);
        });
  };


  return (
    <>
    <span className ='underline' onClick={()=>{if(qh){setQhcounter(qhcounter+1);} updateH();}}>Yes </span>( {qhcounter})
    </>
  );
};

export default Qhcounter;

