import React from 'react';
import ReacDom from 'react-dom/client';
import Qlist from './qlist.jsx';
import Qsearch from './qsearch.jsx';
import Qadd from './qadd.jsx';
import Qmore from './qmore.jsx';
import Alist from './alist.jsx';

const Qsection = ()=>{
  return (<div  data-testid="Qindex" className="question">
    <h2>QUESTIONS & ANSWERS</h2>
    <Qsearch />
    <div className='question-list'>
    <Qlist />
    <Alist />
    </div>


    <Qadd />
  </div>);
};

export default Qsection;
