import React,{useState, useEffect} from 'react';
import ReactDom from 'react-dom/client';
import axios from 'axios';
// import 'regenerator-runtime/runtime.js';
// require("dotenv").config();
import Answer from './a.jsx';



var Q = ({question}) =>{

  return (<div>
    Q: {question.question_body}
    {/* A: {question.answers.map((answer)=>{
      return (<Answer answer={answer} key={answer.id} />)
    })} */}
    A: {
    // for (var key in question.answers){
    //      console.log(key)
    // }
    console.log(question.answers)
    }
    <Answer />


  </div>);
};

export default Q;