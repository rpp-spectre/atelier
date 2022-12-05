import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import Stars from './Stars.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';

function Ratings(props) {

  let testData = {
    fiveStar: 10,
    fourStar: 6,
    threeStar: 4,
    twoStar: 1,
    oneStar: 2,
  }

  let weightedTotal = testData.oneStar * 1 + testData.twoStar * 2 + testData.threeStar * 3 + testData.fourStar * 4 + testData.fiveStar * 5;
  let numberOfReviews = 0;
  Object.values(testData).forEach((element) => {
    numberOfReviews += element;
  })

  let averageRating = Math.round(weightedTotal / numberOfReviews * 10) / 10;

  let ratingBars = Object.values(testData).map((element, index) => {
    return <div key={index}>
      <RatingBreakdown star={Math.abs(index - 5)} ratings={element} totalRatings={numberOfReviews} />
      </div>
  })

  return (
  <div className='ratings'>
    <h1>{averageRating} <Stars rating={averageRating}/></h1>
    <div>100% of reviews recommend this product</div>
    {ratingBars}
  </div>
  )
}

export default Ratings;