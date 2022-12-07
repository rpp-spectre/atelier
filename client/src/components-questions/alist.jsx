import React,{useState, useEffect} from 'react';
import ReactDom from 'react-dom/client';
import axios from 'axios';
import 'regenerator-runtime/runtime.js';
// require("dotenv").config();
import Answer from './a.jsx';



var Alist = ({qid}) =>{
  const[answers,setAnswers]=useState([]);
  const[NoA,setNoA]=useState(2);

  let load = ()=>{
    if (NoA === answers.length) {
      return null;
    } else {
      return <h3 onClick={()=>{setNoA(answers.length)}}>LOAD MORE ANSWERS</h3>;
    }
  };

  useEffect(()=>{
    (async()=>{
      // let response = await axios.get("http://localhost:3000/questions/640996/answers");
      let response = await axios.get(`http://localhost:3000/questions/${qid}/answers`);
      let as = response.data.results;
      as.sort((a,b)=>{
        if (a['helpfulness'] > b['helpfulness']) {
          return -1;
        }
        if(a['helpfulness'] < b['helpfulness']) {
          return 1;
        }
        return 0;
      });
      setAnswers(as);
    })()
  },[]);

  return (<div>

       {answers.slice(0,NoA).map((answer)=>{
        // console.log('answers',answers);
        return <Answer answer={answer} key = {answer.answer_id} />
      })}
      {/* <h3 onClick={()=>{setNoA(answers.length)}}>LOAD MORE ANSWERS</h3> */}
      {load()}

  </div>
  );
};

export default Alist;