import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import ReviewList from './ReviewList.jsx';
import ReviewForm from './ReviewForm.jsx';
import Review from './Reviews.jsx';
import Ratings from './Ratings.jsx';
import ProductBreakdown from './ProductBreakdown.jsx';
import ProductBreakdownList from './ProductBreakdownList.jsx';
import HoverStars from './HoverStars.jsx';
import './review.css';

function ReviewSection(props) {
  const [showReviewCount, sliceReviewArray] = useState(2);
  let shownReviewsArray = props.totalReviewsArray.slice(0, showReviewCount);
  const [addReviews, setAddReviews]  = useState(false);

  let addReviewButton = <button className='review-button reviews' onClick={(e) => {setAddReviews(true); props.handleClickTracking(e);}}>Add A Review +</button>;
  if (addReviews === true) {
    addReviewButton = <ReviewForm productName={props.productName} data={props.reviewMeta} onClose={() => {setAddReviews(false)}} handleClickTracking={props.handleClickTracking}/>
  }

  let moreReviewButton = <button className='review-button reviews' onClick={(e) => {sliceReviewArray(showReviewCount + 2); props.handleClickTracking(e);}}>More Reviews</button>;
  if (shownReviewsArray.length === props.totalReviewsArray.length) {
    moreReviewButton = null;
  }

  let reviewTiles = <ReviewList props={shownReviewsArray}/>
  if (props.totalReviewsArray.length === 0) {
    reviewTiles = <div>There are no reviews yet.</div>;
  }

  let ratingSection = <Ratings
    data={props.reviewMeta}
    handleFilter={props.handleFilter}
    filterApplied={props.filterApplied}
    removeFilter={props.removeFilter}
    handleClickTracking={props.handleClickTracking}
    ratingFilter={props.ratingFilter}/>
  if (!props.reviewMeta) {
    ratingSection = null;
  }

  let productBreakdownSection = <ProductBreakdownList data={props.reviewMeta}/>
  if (!props.reviewMeta) {
    productBreakdownSection = null;
  }

  return (
  <div>
    <h2 className='review-section' id='review-section'>Reviews and Ratings</h2>
    <div className='rating-product-breakdown'>
    {ratingSection}
    <h3>Product Breakdown</h3>
    {productBreakdownSection}
    </div>
    <div className='review'>
      <h3>{props.reviewCount} reviews, sorted by
        <select className='review-select reviews' onClick={props.handleClickTracking} onChange={props.onSort}>
          <option value='relevance'>relevance</option>
          <option value='newest'>newest</option>
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