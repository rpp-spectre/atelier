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
  const pid = params.id;
  // render() {
    return (<div>
      <ProductSection />
      <ReviewSection />
      <Qsection pid = {pid} />
    </div>);

// others will also put their sections in here
  // }
};


const root = ReactDOM.createRoot(document.getElementById('root'));
const element = <App />;
root.render(
  <Router>

    <Routes>
     <Route exact path ='/' element={<App />} />
     <Route exact path ='/:id' element={<App />} />
    </Routes>

  </Router>
  );

