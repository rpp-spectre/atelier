import React,{useState, useEffect} from 'react';
import ReactDom from 'react-dom/client';
import axios from 'axios';
// import 'regenerator-runtime/runtime.js';
// require("dotenv").config();
import Alist from './alist.jsx';
import Answeradd from './addforms/answeradd.jsx';
import Qhcounter from './counter/qhcounter.jsx';



var Q = ({question}) =>{
  const qcounter = question.question_helpfulness;
  // const [qcounter, setQcounter] = useState([question.question_helpfulness]);
  return (<div role="question">


    {/* <h3>Q: {question.question_body}</h3> Helpful? Yes ( {qcounter}) | <Answeradd /> */}
    <h3>Q: {question.question_body}</h3> Helpful? <Qhcounter qcounter={qcounter}/> | <Answeradd />
    <br />
    <br />
    <Alist qid={question.question_id} />


  </div>);
};

export default Q;