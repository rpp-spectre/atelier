import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import ReviewList from './ReviewList.jsx';
import ReviewForm from './ReviewForm.jsx';
import Review from './Reviews.jsx';
import Ratings from './Ratings.jsx';
import ProductBreakdown from './ProductBreakdown.jsx';

function ReviewSection(props) {
  let totalReviewsArray = [<Review />, <Review />, <Review />, <Review />, <Review />];
  const [reviewCount, setReviewCount] = useState(totalReviewsArray.length);
  const [addReviews, setAddReviews]  = useState(false);
  const [showReviewCount, sliceReviewArray] = useState(2);
  let shownReviewsArray = totalReviewsArray.slice(0, showReviewCount);

  let addReviewButton = <button onClick={() => {setAddReviews(true)}}>Add A Review +</button>;
  if (addReviews === true) {
    addReviewButton = <ReviewForm />
  }

  let moreReviewButton = <button onClick={() => {sliceReviewArray(showReviewCount + 2)}}>More Reviews</button>;
  if (shownReviewsArray.length === totalReviewsArray.length) {
    moreReviewButton = null;
  }

  return (
  <div>
    <h2>Reviews and Ratings</h2>
    <div className='rating-product-breakdown'>
    <Ratings />
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
          <ReviewList props={shownReviewsArray}/>
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