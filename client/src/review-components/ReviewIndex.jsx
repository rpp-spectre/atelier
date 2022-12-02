import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import ReviewList from './ReviewList.jsx';
import ReviewForm from './ReviewForm.jsx';
import Review from './Reviews.jsx';

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

  return (
  <div>
    <h3>{reviewCount} reviews, sorted by
      <select>
        <option value='newest'>newest</option>
        <option value='relevance'>relevance</option>
        <option value='helpful'>helpful</option>
      </select>
    </h3>
    <ReviewList props={shownReviewsArray}/>
    {moreReviewButton}
    {addReviewButton}
    </div>
  );
}

export default ReviewSection;