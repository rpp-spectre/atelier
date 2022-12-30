import React from 'react';
import ReactDom from 'react-dom/client';

const Simage = ({image}) =>{
  return (<>
    <img className= "question" alt="answer photo" width={"100px"} src={URL.createObjectURL(image)} />

    {/* <button onClick={()=>setSelectedImage(null)}>Remove</button> */}
  </>);



};

export default Simage;