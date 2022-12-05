import React, {useState, useEffect} from 'react';
import ReacDom from 'react-dom/client';
import Aphotos from './photos/aphotos.jsx';

const Answer = ({answer})=>{

  var photo = ()=>{
    if(answer.photos.length ===0) {

      return null;
    } else {
      return <Aphotos photos={answer.photos} />;
    }
  }

  return (
    <div>
      A: {answer.body}
      <br />
      by {answer.answer_name} {answer.date} | Helpful ({answer.helpfulness}) Report
      <br />
       {photo()}
    </div>
  );
};

export default Answer;