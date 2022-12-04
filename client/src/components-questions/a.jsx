import React, {useState, useEffect} from 'react';
import ReacDom from 'react-dom/client';

const Answer = ({answer})=>{
  return (
    <div>
      A: {answer.body}
    </div>
  );
};

export default Answer;