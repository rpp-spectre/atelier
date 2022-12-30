import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import ReviewSection from './review-components/ReviewIndex.jsx';
import Qsection from './components-questions/qindex.jsx';
import ProductSection from './product-components/Overview.jsx';
import { HashRouter as Router, Link, Switch, Routes, Route, useParams } from 'react-router-dom'; // for handling passing route of product ID


const App = () => {
  const params = useParams();
  const pid = params.id || 71698;

  console.log('pid', pid);
    return (<div>
      <Link to='/71697'>home again</Link>
      <ProductSection />
      <ReviewSection />
      <Qsection pid = {pid} />
    </div>);
};


export default App;

