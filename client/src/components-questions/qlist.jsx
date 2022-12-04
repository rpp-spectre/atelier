import React,{useState, useEffect} from 'react';
import ReactDom from 'react-dom/client';
import axios from 'axios';
import 'regenerator-runtime/runtime.js';
// require("dotenv").config();
import Q from './q.jsx';



var Qlist = () =>{
  const[questions,setQuestions]=useState([]);
  // const[key,setKey]=useState('');

  useEffect(()=>{
    (async()=>{
      let response = await axios.get("http://localhost:3000/QUESTIONS");
      // console.log('response', response.data.results[0]);
      setQuestions(response.data.results);
    })()
  },[]);

  return (<div>

       {questions.map((question)=>{
        // console.log(questions);
        return <Q question={question} key = {question.question_id} />
      })}

     {/* {questions} */}

  </div>);
};

export default Qlist;