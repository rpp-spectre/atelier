import React from 'react';
import ReactDom from 'react-dom/client';
import axios from 'axios';

const Reporta = ({aid}) =>{
  const handleClick = () =>{
    let apiRA = `http://localhost:3000/answers/${aid}/report`;
    axios.put(apiRA)
     .then((result)=>{
     console.log(result);
   // res.send('helpfulness updated');
     })
     .catch((error) =>{
       throw(error);
       });
  }

  return(
    <>
   <span className = "underline" onClick = {
    () => {handleClick()}
   } >
   Report{aid}
   </span>
   </>
  );
}

export default Reporta;