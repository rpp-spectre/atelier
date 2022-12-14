import React,{useState, useEffect} from 'react';
import ReactDom from 'react-dom/client';
import axios from 'axios';
import Qlist from './qlist.jsx';
import Qadd from './addforms/qadd.jsx';
import 'regenerator-runtime/runtime.js';
import './questions.css';
// require("dotenv").config();



var Qsearch = ({pid,handleClickTracking}) =>{
  const [term, setTerm] = useState('');
  const[noQ,setNoQ]=useState(2);
  const[questions,setQuestions]=useState([]);
  const[initqs,setInitqs]=useState([]);
  const[product, setProduct] = useState('');

  let load = (noQ,questions)=>{
    if (noQ >= questions.length) {
      return null;
    } else {
      return <button data-testid="load" className = "questions" onClick={(e)=>{handleClickTracking(e); setNoQ(noQ+2)}}>Load More Questions</button>;
    }
  };

  let search = (sterm) =>{
    let newArray = initqs.filter((question)=>{
      return question.question_body.includes(sterm);
    });
    setQuestions(newArray);
  };

  let handleChange = (e) =>{
      // handleClickTracking(e);
      setTerm(e.target.value);
      if(e.target.value.length >= 3){
        search(e.target.value);
      } else {
        setQuestions(initqs);
      }
  };


  useEffect(()=>{
    (async()=>{
      let response = await axios.get(`/QUESTIONS?product_id=${pid}`);
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
      setInitqs(qs);
      let presponse = await axios.get(`/products/${pid}`);
      // console.log('response', response.data.results[0]);
      let product=presponse.data;
      setProduct(product.name);


    })()
  },[]);


  return (<>

    <form data-testid="searchForm">

          <input
            type="text"
            name="search"
            placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS"
            required
            autoComplete="off"
            className="searchbox"
            value ={term}
            onChange = {handleChange}
          />

    </form>
    <div className='question-list'>
    <Qlist noQ={noQ} questions={questions} pid={pid} product={product} handleClickTracking={handleClickTracking} />
    </div>
    <span className="buttons questions">
    {load(noQ, questions)}
    <Qadd pid={pid} product={product} handleClickTracking={handleClickTracking} />
    </span>
  </>);
};

export default Qsearch;