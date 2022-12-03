import React,{useState, useEffect} from 'react';
import ReactDom from 'react-dom/client';
import axios from 'axios';
// import 'regenerator-runtime/runtime.js';
// require("dotenv").config();
import Q from './q.jsx';



var Qlist = () =>{

  return (<div>
    this is question list

      <Q />


  </div>);
};

export default Qlist;