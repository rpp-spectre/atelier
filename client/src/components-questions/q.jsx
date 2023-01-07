import React,{useState, useEffect} from 'react';
import ReactDom from 'react-dom/client';
import axios from 'axios';
// import 'regenerator-runtime/runtime.js';
// require("dotenv").config();
import Alist from './alist.jsx';
import Answeradd from './addforms/answeradd.jsx';
import Qhcounter from './counter/qhcounter.jsx';



var Q = ({question, pid, product, handleClickTracking}) =>{
  const qcounter = question.question_helpfulness;
  // const [qcounter, setQcounter] = useState([question.question_helpfulness]);
  return (<div role="document">


    {/* <h3>Q: {question.question_body}</h3> Helpful? Yes ( {qcounter}) | <Answeradd /> */}
    <span className = "qbody">Q: {question.question_body}</span><span className="qsub" style={{textAlign: "right"}}> Helpful?&nbsp;&nbsp;<Qhcounter qcounter={qcounter} qid={question.question_id} handleClickTracking={handleClickTracking} /> &nbsp;|&nbsp;&nbsp; <Answeradd pid={pid} qid={question.question_id} qbody={question.question_body} product={product} handleClickTracking={handleClickTracking} />&nbsp;&nbsp;</span>
    <br />
    <br />
    <Alist qid={question.question_id} handleClickTracking={handleClickTracking} />


  </div>);
};

export default Q;