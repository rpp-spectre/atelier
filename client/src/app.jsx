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

//Review API calls
  const [reviewMeta, setReviewMeta] = useState(null);
  const [totalReviewsArray, setReviewsArray] = useState([]);
  const [totalReviewsArrayCopy, setReviewsCopyArray] = useState([]);
  const [filteredArray, setFilteredArray] = useState([]);
  const [reviewCount, setReviewCount] = useState(totalReviewsArray.length);

  useEffect(() => {
    (async() => {
      let result = await axios.get(`/reviewsMeta/${pid}`);
      setReviewMeta(result.data);
    })()
  }, []);

  useEffect(() => {
    (async() => {
      let result = await axios.get(`/reviews/${pid}`);
      setReviewCount(result.data.results.length);
      let resultArray = [];
      result.data.results.forEach((element) => {
        resultArray.push(<Review data={element}/>);
      });
      setReviewsArray(resultArray);
      setReviewsCopyArray(resultArray);
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
      url: `/sortReviews/${pid}`,
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

  function handleFilter(e) {
    console.log(filteredArray);
    let filterReview = {};
    console.log(e.target.className);
    totalReviewsArrayCopy.forEach((review) => {
      if (filterReview[review.props.data.rating] === undefined) {
        filterReview[review.props.data.rating] = [review];
      } else {
        filterReview[review.props.data.rating].push(review);
      }
    })
    if (e.target.className === 'true') {
      let resultArray = filteredArray.concat(filterReview[Number.parseInt(e.target.value)]);
      setFilteredArray(resultArray);
      setReviewsArray(resultArray);
    } else {
      let resultArray = filteredArray.filter(review => review.props.data.rating !== Number.parseInt(e.target.value));
      if (resultArray.length === 0) {
        setFilteredArray(resultArray);
        setReviewsArray(totalReviewsArrayCopy);
      } else {
        setFilteredArray(resultArray);
        setReviewsArray(resultArray);
      }
    }
  }

  function handleClickTracking(e) {
    console.log(e);
  }

  // console.log('pid', pid);
    return (<div>
      <Link to='/71697'>home again</Link>
      <ProductSection pid = {pid}/>
      <ReviewSection reviewMeta={reviewMeta} totalReviewsArray={totalReviewsArray} reviewCount={reviewCount} onSort={handleOptions} handleFilter={handleFilter} handleClickTracking={handleClickTracking}/>
      <Qsection pid = {pid} handleClickTracking={handleClickTracking} />
    </div>);
};

// others will also put their sections in here
  // }


export default App;

