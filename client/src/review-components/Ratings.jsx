import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import Stars from './Stars.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';

let Ratings = (props) => {
  let ratingsData = props.data.ratings;
  let recommendData = props.data.recommended;

  let weightedTotal = Number.parseInt(ratingsData['1']) * 1 + Number.parseInt(ratingsData['2']) * 2 + Number.parseInt(ratingsData['3']) * 3 + Number.parseInt(ratingsData['4']) * 4 + Number.parseInt(ratingsData['5']) * 5;
  let numberOfReviews = 0;
  Object.values(ratingsData).forEach((element) => {
    numberOfReviews += Number.parseInt(element);
  })

  let averageRating = Math.round(weightedTotal / numberOfReviews * 10) / 10;

  let ratingBars = Object.values(ratingsData).reverse().map((element, index) => {
    return <div key={index}>
      <RatingBreakdown star={Math.abs(index - 5)} ratings={element} totalRatings={numberOfReviews} />
      </div>
  })

  let recommendations = Number.parseInt(recommendData.true)/ (Number.parseInt(recommendData.false) + Number.parseInt(recommendData.true));
  let recommendPercent = Math.round(recommendations * 100);

  return (
  <div className='ratings'>
    <h1>{averageRating} <Stars rating={averageRating}/></h1>
    <div>{recommendPercent}% of reviews recommend this product</div>
    {ratingBars}
  </div>
  )
}

export default Ratings;