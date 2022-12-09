import React,{useState, useEffect} from 'react';
import ReactDom from 'react-dom/client';
import axios from 'axios';
import Qlist from './qlist.jsx';
import 'regenerator-runtime/runtime.js';
// require("dotenv").config();



var Qsearch = () =>{
  const [term, setTerm] = useState('');
  const[noQ,setNoQ]=useState(2);
  const[questions,setQuestions]=useState([]);
  const[initqs,setInitqs]=useState([]);

  let load = ()=>{
    if (noQ >= questions.length) {
      return null;
    } else {
      return <button onClick={()=>{setNoQ(noQ+2)}}>LOAD MORE QUESTIONS</button>;
    }
  };

  let search = (sterm) =>{
    let newArray = initqs.filter((question)=>{
      return question.question_body.includes(sterm);
    });
    setQuestions(newArray);
  };

  let handleChange = (e) =>{

      setTerm(e.target.value);
      if(e.target.value.length >= 3){
        search(e.target.value);
      } else {
        setQuestions(initqs);
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
      setInitqs(qs);

    })()
  },[]);


  return (<>

    <form>

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
    <Qlist noQ={noQ} questions={questions}/>
    </div>
    {load()}
  </>);
};

export default Qsearch;