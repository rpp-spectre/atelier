import React,{useState, useEffect} from 'react';
import ReactDom from 'react-dom/client';
import axios from 'axios';
import Qlist from './qlist.jsx';
// import 'regenerator-runtime/runtime.js';
// require("dotenv").config();



var Qsearch = ({questions, noQ}) =>{
  const [term, setTerm] = useState('');

  let search = (term) =>{

  };

  return (<div>

    <form>

          <input
            type="text"
            name="search"
            placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS"
            required
            autoComplete="off"
            className="searchbox"
            value ={term}
            onChange = {(e)=>{ setTerm(e.target.value); }}
          />

    </form>
    <Qlist noQ={noQ} questions={questions}/>

  </div>);
};

export default Qsearch;