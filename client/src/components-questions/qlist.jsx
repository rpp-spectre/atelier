import React,{useState, useEffect} from 'react';
import ReactDom from 'react-dom/client';
// require("dotenv").config();
import Q from './q.jsx';



var Qlist = ({noQ, questions, pid, product, handleClickTracking}) =>{

  return (<div data-testid='tqlist'>

       {questions.slice(0,noQ).map((question)=>{

        return <Q question={question} key = {question.question_id} pid={pid} product={product} handleClickTracking={handleClickTracking} />
      })}



  </div>);
};

export default Qlist;