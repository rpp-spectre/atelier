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

function ReviewSection(props) {
  const [showReviewCount, sliceReviewArray] = useState(2);
  let shownReviewsArray = props.totalReviewsArray.slice(0, showReviewCount);
  const [addReviews, setAddReviews]  = useState(false);

  let addReviewButton = <button onClick={() => {setAddReviews(true)}}>Add A Review +</button>;
  if (addReviews === true) {
    addReviewButton = <ReviewForm data={props.reviewMeta} onClose={() => {setAddReviews(false)}}/>
  }

  let moreReviewButton = <button onClick={() => {sliceReviewArray(showReviewCount + 2)}}>More Reviews</button>;
  if (shownReviewsArray.length === props.totalReviewsArray.length) {
    moreReviewButton = null;
  }

  let reviewTiles = <ReviewList props={shownReviewsArray}/>
  if (props.totalReviewsArray.length === 0) {
    reviewTiles = <div>There are no reviews yet.</div>;
  }

  let ratingSection = <Ratings data={props.reviewMeta}/>
  if (!props.reviewMeta) {
    ratingSection = null;
  }

  let productBreakdownSection = <ProductBreakdownList data={props.reviewMeta}/>
  if (!props.reviewMeta) {
    productBreakdownSection = null;
  }

  // function handleOptions(e) {
  //   let sort = {
  //     newest: 'newest',
  //     helpful: 'helpful',
  //     relevance: 'relevant'
  //   };
  //   axios({
  //     method: 'post',
  //     url: 'http://localhost:3000/sortReviews',
  //     data: {data: sort[e.target.value]},
  //   })
  //   .then((result) => {
  //     let resultArray = [];
  //     result.data.results.forEach((element) => {
  //       resultArray.push(<Review data={element}/>);
  //     });
  //     setReviewsArray(resultArray);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   })
  // }

  return (
  <div>
    <h2>Reviews and Ratings</h2>
    <div className='rating-product-breakdown'>
    {ratingSection}
    {productBreakdownSection}
    </div>
    <div className='review'>
      <h3>{props.reviewCount} reviews, sorted by
        <select onChange={props.onSort}>
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