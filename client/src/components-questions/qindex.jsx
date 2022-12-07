import React,{useState, useEffect} from 'react';
import ReacDom from 'react-dom/client';
import Qlist from './qlist.jsx';
import Qsearch from './qsearch.jsx';
import Qadd from './addforms/qadd.jsx';
import Alist from './alist.jsx';
import axios from 'axios';
import 'regenerator-runtime/runtime.js';

const Qsection = ()=>{
  const[noQ,setNoQ]=useState(2);
  const[questions,setQuestions]=useState([]);

  let load = ()=>{
    if (noQ >= questions.length) {
      return null;
    } else {
      return <button onClick={()=>{setNoQ(noQ+2)}}>LOAD MORE QUESTIONS</button>;
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

  return (<div  data-testid="Qindex" className="question">
    <h2>QUESTIONS & ANSWERS</h2>
    <Qsearch />
    <div className='question-list'>
    <Qlist noQ={noQ} questions={questions}/>
    </div>
    {load()}

    <Qadd />
  </div>);
};

export default Qsection;
