import React,{useState, useEffect} from 'react';
import ReactDom from 'react-dom/client';
import axios from 'axios';
// import 'regenerator-runtime/runtime.js';
// require("dotenv").config();
import Alist from './alist.jsx';



var Q = ({question}) =>{
  return (<div>


    <h3>Q: {question.question_body}</h3> Helpful? Yes (0) | Add Answer
    <br />
    <br />
    <Alist qid={question.question_id}/>


  </div>);
};

export default Q;