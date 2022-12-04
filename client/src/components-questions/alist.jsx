import React,{useState, useEffect} from 'react';
import ReactDom from 'react-dom/client';
import axios from 'axios';
import 'regenerator-runtime/runtime.js';
// require("dotenv").config();
import Answer from './a.jsx';



var Alist = () =>{
  const[answers,setAnswers]=useState([]);


  useEffect(()=>{
    (async()=>{
      let response = await axios.get("http://localhost:3000/QUESTIONS");
      console.log('response', response.data.results[0]);
      setQuestions(response.data.results);
    })()
  },[]);

  return (<div>
    this is question list
       {questions.map((question)=>{
        console.log(questions);
        return <Q question={question} key = {question.question_id} />
      })}

     {/* {questions} */}

  </div>);
};

export default Alist;