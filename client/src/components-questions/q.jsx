import React,{useState, useEffect} from 'react';
import ReactDom from 'react-dom/client';
import axios from 'axios';
// import 'regenerator-runtime/runtime.js';
// require("dotenv").config();
import Alist from './alist.jsx';



var Q = ({question}) =>{
  return (<div>
    Q: {question.question_body} Helpful? Yes (0) | Add Answer
    <Alist />


  </div>);
};

export default Q;