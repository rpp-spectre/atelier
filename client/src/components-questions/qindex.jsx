import React from 'react';
import ReacDom from 'react-dom/client';
import Qlist from './qlist.jsx';
import Qsearch from './qsearch.jsx';
import Qadd from './qadd.jsx';
import Qmore from './qmore.jsx';

const Qsection = ()=>{
  return (<div  data-testid="Qindex">
    QUESTIONS & ANSWERS
    <Qsearch />
    <Qlist />
    <Qmore />
    <Qadd />
  </div>);
};

export default Qsection;
