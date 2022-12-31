import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import ReviewSection from './review-components/ReviewIndex.jsx';
import Qsection from './components-questions/qindex.jsx';
import ProductSection from './product-components/Overview.jsx';
import { HashRouter as Router, Link, Switch, Routes, Route, useParams } from 'react-router-dom'; // for handling passing route of product ID
import axios from 'axios';
import Review from './review-components/Reviews.jsx';


// class App extends React.Component {
//   constructor(props) {
//     super(props);
//   };
const App =()=>{
  const params = useParams();
  const pid = params.id || 71698;
  // console.log('pid', pid);

//Review API calls
  const [reviewMeta, setReviewMeta] = useState(null);
  const [totalReviewsArray, setReviewsArray] = useState([]);
  const [totalReviewsArrayCopy, setReviewsCopyArray] = useState([]);
  const [reviewCount, setReviewCount] = useState(totalReviewsArray.length);

  useEffect(() => {
    (async() => {
      let result = await axios.get(`http://localhost:3000/reviewsMeta/${pid}`);
      setReviewMeta(result.data);
    })()
  }, []);

  useEffect(() => {
    (async() => {
      let result = await axios.get(`http://localhost:3000/reviews/${pid}`);
      setReviewCount(result.data.results.length);
      let resultArray = [];
      result.data.results.forEach((element) => {
        resultArray.push(<Review data={element}/>);
      });
      setReviewsArray(resultArray);
      setReviewsCopyArray(resultArray);
    })()
  }, []);

  console.log('pid', pid);
  // render() {
    return (<div>
      <Link to='/71697'>home again</Link>
      <ProductSection pid = {pid}/>
      <ReviewSection />
      <Qsection pid = {pid} />
    </div>);

// others will also put their sections in here
  // }
};


export default App;

