import React,{useState, useEffect} from 'react';
import ReactDom from 'react-dom/client';
import axios from 'axios';
import 'regenerator-runtime/runtime.js';



var Qlist = () =>{
  const [questions, setQuestions] =useState([]);

  useEffect(()=>{
    (async()=> {
      let response = await axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/:hr-rpp/qa/questions?product_id=1', {
        headers: {
          'Authorization': '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'
        }
      });
      console.log('response in list', response);
      setQuestions(response.data.result);
    })();
  }, []);

  return (<div>
    this is question list

  </div>);
};

export default Qlist;