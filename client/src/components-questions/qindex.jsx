import React,{useState, useEffect} from 'react';
import ReacDom from 'react-dom/client';
import Qlist from './qlist.jsx';
import Qsearch from './qsearch.jsx';
import Alist from './alist.jsx';
// import axios from 'axios';
import { HashRouter as Router, Switch, Link, Routes, Route, useParams } from 'react-router-dom'; // for handling passing route of product ID
import 'regenerator-runtime/runtime.js';

const Qsection = ({pid, handleClickTracking})=>{

  return (<div data-testid="Qindex" className="question">
    <h2>QUESTIONS & ANSWERS</h2>

    <Qsearch pid={pid} handleClickTracking={handleClickTracking} />

    {/* <Qlist noQ={noQ} questions={questions}/> */}




  </div>);
};

export default Qsection;
