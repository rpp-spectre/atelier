import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import ReviewSection from './review-components/ReviewIndex.jsx';
import Qsection from './components-questions/qindex.jsx';
import ProductSection from './product-components/Overview.jsx';
import { HashRouter as Router, Link, Switch, Routes, Route, useParams } from 'react-router-dom'; // for handling passing route of product ID


// class App extends React.Component {
//   constructor(props) {
//     super(props);
//   };
const App =()=>{
  const params = useParams();
  const pid = undefined || params.id;

  console.log('pid', pid);
  // render() {
    return (<div>
      {/* <Link to='/71697'>home again</Link> */}
      <ProductSection />
      <ReviewSection />
      <Qsection pid = {pid} />
    </div>);

// others will also put their sections in here
  // }
};


export default App;

