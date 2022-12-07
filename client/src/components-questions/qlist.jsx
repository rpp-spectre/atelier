import React,{useState, useEffect} from 'react';
import ReactDom from 'react-dom/client';
import axios from 'axios';
import 'regenerator-runtime/runtime.js';
// require("dotenv").config();
import Q from './q.jsx';



var Qlist = () =>{
  const[questions,setQuestions]=useState([]);
  const[NoQ,setNoQ]=useState(2);

  let load = ()=>{
    if (NoQ >= questions.length) {
      return null;
    } else {
      return <button onClick={()=>{setNoQ(NoQ+2)}}>LOAD MORE QUESTIONS</button>;
    }
  };


  useEffect(()=>{
    (async()=>{
      let response = await axios.get("http://localhost:3000/QUESTIONS");
      // console.log('response', response.data.results[0]);
      let qs=response.data.results;
      qs.sort(function(a, b) {
        if(a['question_helpfulness']> b['question_helpfulness']){
          return -1;
        }
        if(a['question_helpfulness']< b['question_helpfulness']){
          return 1;
        }
        return 0;
      });
      setQuestions(qs);
      // setQuestions(response.data.results);
    })()
  },[]);

  return (<div>

       {questions.slice(0,NoQ).map((question)=>{

        return <Q question={question} key = {question.question_id} />
      })}

     {load()}

  </div>);
};

export default Qlist;