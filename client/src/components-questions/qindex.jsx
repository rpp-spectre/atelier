import React,{useState, useEffect} from 'react';
import ReacDom from 'react-dom/client';
import Qlist from './qlist.jsx';
import Qsearch from './qsearch.jsx';
import Qadd from './addforms/qadd.jsx';
import Alist from './alist.jsx';
import axios from 'axios';
import 'regenerator-runtime/runtime.js';

const Qsection = ()=>{






  return (<div data-testid="Qindex" className="question">
    <h2>QUESTIONS & ANSWERS</h2>
    <Qsearch />

    {/* <Qlist noQ={noQ} questions={questions}/> */}



    <Qadd />
  </div>);
};

export default Qsection;
