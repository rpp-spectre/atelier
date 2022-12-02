import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import ReviewList from './ReviewList.jsx';
import ReviewForm from './ReviewForm.jsx';

function ReviewSection(props) {
  const [reviewCount, setReviewCount] = useState(2);
  const [addReviews, setAddReviews]  = useState(false);

  let moreReviews = <button onClick= {() => {setAddReviews(true)}}>Add A Review +</button>;
  if (addReviews === true) {
    moreReviews = <ReviewForm />
  }


  return (
  <div>
    <h3>{reviewCount} reviews, sorted by
      <select>
        <option value='newest'>newest</option>
        <option value='relevance'>relevance</option>
        <option value='helpful'>helpful</option>
      </select>
    </h3>
    <ReviewList />
    {moreReviews}
    </div>
  );
}

export default ReviewSection;