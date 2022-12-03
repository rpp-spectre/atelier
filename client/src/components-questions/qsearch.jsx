import React,{useState, useEffect} from 'react';
import ReactDom from 'react-dom/client';
import axios from 'axios';
// import 'regenerator-runtime/runtime.js';
// require("dotenv").config();



var Qsearch = () =>{

  return (<div>

    <form>

          <input
            type="text"
            name="search"
            placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS"
            required
            autoComplete="off"
            className="searchbox"
            // value ={title}
            // onChange = {(e)=>{ setTitle(e.target.value); }}
          />

    </form>

  </div>);
};

export default Qsearch;