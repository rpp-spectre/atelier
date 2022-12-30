import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import ReviewSection from './review-components/ReviewIndex.jsx';
import Qsection from './components-questions/qindex.jsx';
import ProductSection from './product-components/Overview.jsx';
import { HashRouter as Router, Link, Switch, Routes, Route, useParams } from 'react-router-dom'; // for handling passing route of product ID
import axios from 'axios';
import Review from './review-components/Reviews.jsx';


const App = () => {
  const params = useParams();
  const pid = params.id || 71698;
  console.log('pid', pid);

//Review API calls
  const [reviewMeta, setReviewMeta] = useState(null);
  const [totalReviewsArray, setReviewsArray] = useState([]);
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
    })()
  }, []);

  function handleOptions(e) {
    let sort = {
      newest: 'newest',
      helpful: 'helpful',
      relevance: 'relevant'
    };
    axios({
      method: 'post',
      url: `http://localhost:3000/sortReviews/${pid}`,
      data: {data: sort[e.target.value]},
    })
    .then((result) => {
      let resultArray = [];
      result.data.results.forEach((element) => {
        resultArray.push(<Review data={element}/>);
      });
      setReviewsArray(resultArray);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  return (<div>
    <Link to='/71697'>home again</Link>
    <ProductSection />
    <ReviewSection reviewMeta={reviewMeta} totalReviewsArray={totalReviewsArray} reviewCount={reviewCount} onSort={handleOptions}/>
    <Qsection pid = {pid} />
  </div>);
};


export default App;

