import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import ReviewList from './ReviewList.jsx';
import ReviewForm from './ReviewForm.jsx';
import Review from './Reviews.jsx';
import Ratings from './Ratings.jsx';
import ProductBreakdown from './ProductBreakdown.jsx';

function ReviewSection(props) {
  const [totalReviewsArray, setReviewsArray] = useState([]);
  const [showReviewCount, sliceReviewArray] = useState(2);
  let shownReviewsArray = totalReviewsArray.slice(0, showReviewCount);
  const [reviewCount, setReviewCount] = useState(totalReviewsArray.length);
  const [addReviews, setAddReviews]  = useState(false);
  const [reviewMeta, setReviewMeta] = useState(null);

  let addReviewButton = <button onClick={() => {setAddReviews(true)}}>Add A Review +</button>;
  if (addReviews === true) {
    addReviewButton = <ReviewForm />
  }

  let moreReviewButton = <button onClick={() => {sliceReviewArray(showReviewCount + 2)}}>More Reviews</button>;
  if (shownReviewsArray.length === totalReviewsArray.length) {
    moreReviewButton = null;
  }

  let reviewTiles = <ReviewList props={shownReviewsArray}/>
  if (totalReviewsArray.length === 0) {
    reviewTiles = null;
  }

  let ratingSection = <Ratings data={reviewMeta}/>
  if (!reviewMeta) {
    ratingSection = null;
  }

  useEffect(() => {
    (async() => {
      let result = await axios.get('http://localhost:3000/reviewsMeta');
      setReviewMeta(result.data);
    })()
  }, []);

  useEffect(() => {
    (async() => {
      let result = await axios.get('http://localhost:3000/reviews');
      setReviewCount(result.data.count);
      let resultArray = [];
      result.data.results.forEach((element) => {
        console.log(element);
        resultArray.push(<Review data={element}/>);
      });
      setReviewsArray(resultArray);
    })()
  }, []);

  return (
  <div>
    <h2>Reviews and Ratings</h2>
    <div className='rating-product-breakdown'>
    {ratingSection}
    <ProductBreakdown />
    <ProductBreakdown />
    <ProductBreakdown />
    </div>
    <div className='review'>
      <h3>{reviewCount} reviews, sorted by
        <select>
          <option value='newest'>newest</option>
          <option value='relevance'>relevance</option>
          <option value='helpful'>helpful</option>
        </select>
      </h3>
        <div className='review-list'>
          {reviewTiles}
        </div>
        <div className='review-buttons'>
          {moreReviewButton}
          {addReviewButton}
        </div>
      </div>
    </div>
  );
}

export default ReviewSection;