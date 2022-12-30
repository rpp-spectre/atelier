import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import Stars from './Stars.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';

let Ratings = (props) => {
  let ratingsData = props.data.ratings;
  let weightedTotal = 0;
  let numberOfReviews = 0;

  for (var i = 1; i <= 5; i++) {
    if (ratingsData[i] === undefined) {
      ratingsData[i] = 0;
    }
    ratingsData[i] = Number.parseInt(ratingsData[i]);
    weightedTotal += ratingsData[i] * i;
    numberOfReviews += ratingsData[i];
  }

  let recommendData = props.data.recommended;
    if (recommendData.true === undefined) {
      recommendData.true = 0;
    }
    if (recommendData.false === undefined) {
      recommendData.false = 0;
    }

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