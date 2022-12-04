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
      let response = await axios.get("http://localhost:3000/questions/640996/answers");
      // console.log('response', response.data.results[0]);
      setAnswers(response.data.results);
    })()
  },[]);

  return (<div>

       {answers.map((answer)=>{
        // console.log('answers',answers);
        return <Answer answer={answer} key = {answer.answer_id} />
      })}

     {/* {answers} */}

  </div>);
};

export default Alist;