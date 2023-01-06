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
  const pid = params.id || 71699;


//Product API calls
  const [productInfo, setProductInfo] = useState({
    id: "id",
    name: "name",
    category: "category",
    slogan: "slogan",
    description: "description",
    features: [{feature: 'feature', value: ''}]
  });

  useEffect(() => {
    (async() => {
      let result = await axios.get(`/products/${pid}`);
      setProductInfo(result.data);
    })()
  }, []);

//Review API calls
  const [reviewMeta, setReviewMeta] = useState(null);
  const [totalReviewsArray, setReviewsArray] = useState([]);
  const [totalReviewsArrayCopy, setReviewsCopyArray] = useState([]);
  const [filteredArray, setFilteredArray] = useState([]);
  const [filterApplied, setFilter] = useState('false');
  const [ratingFilter, setRatingFilter] = useState([]);
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
        resultArray.push(<Review data={element} handleClickTracking={handleClickTracking}/>);
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
        resultArray.push(<Review data={element} handleClickTracking={handleClickTracking}/>);
      });
      setReviewsArray(resultArray);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  function handleFilter(e) {
    let filterReview = {};
    totalReviewsArrayCopy.forEach((review) => {
      if (filterReview[review.props.data.rating] === undefined) {
        filterReview[review.props.data.rating] = [review];
      } else {
        filterReview[review.props.data.rating].push(review);
      }
    });

    setFilter('true');
    if (e.target.className === 'true filter reviews') {
      let resultArray = filteredArray.concat(filterReview[Number.parseInt(e.target.value)]);
      setRatingFilter(ratingFilter.concat([e.target.value]));
      setFilteredArray(resultArray);
      setReviewsArray(resultArray);
    } else {
      let resultArray = filteredArray.filter(review => review.props.data.rating !== Number.parseInt(e.target.value));
      if (resultArray.length === 0) {
        setRatingFilter([]);
        setFilteredArray(resultArray);
        setReviewsArray(totalReviewsArrayCopy);
        setFilter('false');
      } else {
        let appliedRatingFilter = ratingFilter.filter(rating => rating !== e.target.value);
        setRatingFilter(appliedRatingFilter);
        setFilteredArray(resultArray);
        setReviewsArray(resultArray);
      }
    }
  }

  function removeFilter(e) {
    setRatingFilter([]);
    setFilteredArray([]);
    setReviewsArray(totalReviewsArrayCopy);
    setFilter('false');
  }

  function handleClickTracking(e) {
    // console.log(e);
    // console.log(e.target);
    let s = new XMLSerializer();
    let ele = s.serializeToString(e.target);
    // console.log(e.target.className.split(' ').pop());
    let date=new Date();
    // console.log(date.toDateString());
    let wname=e.target.className.split(' ').pop();
    axios.post('/interactions', {
      "element": ele,
      // "element": "element",
      "widget": wname,
      "time": date.toDateString()
      // "time":"5394.899999976158"
      })
    .then((result) => {
      console.log('in controller', result);
      // console.log('controller data',result.data);

    })
    .catch((error) => {
      // console.log(response.config.data);
      // JSON.stringify(error);
      // throw(JSON.stringify(error));
      throw (error);
    });
  }

  // console.log('pid', pid);
    return (<div>
      <Link to='/71697'>home again</Link>
      {/* <ProductSection
        pid={pid}
        productInfo={productInfo}
        reviewCount={reviewCount}
        reviewMeta={reviewMeta}
        handleClickTracking={handleClickTracking}/> */}
      <ReviewSection
        productName={productInfo.name}
        reviewMeta={reviewMeta}
        totalReviewsArray={totalReviewsArray}
        reviewCount={reviewCount} onSort={handleOptions}
        handleFilter={handleFilter}
        filterApplied={filterApplied}
        removeFilter={removeFilter}
        ratingFilter={ratingFilter}
        handleClickTracking={handleClickTracking}/>
      {/* <Qsection pid = {pid} handleClickTracking={handleClickTracking} /> */}
    </div>);
};

// others will also put their sections in here
  // }


export default App;

