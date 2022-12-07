import React,{useState, useEffect} from 'react';
import ReactDom from 'react-dom/client';
// require("dotenv").config();
import Q from './q.jsx';



var Qlist = ({noQ, questions}) =>{

  return (<div>

       {questions.slice(0,noQ).map((question)=>{

        return <Q question={question} key = {question.question_id} />
      })}



  </div>);
};

export default Qlist;