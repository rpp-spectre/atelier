import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';

//include date, username, likes

function Reviews(props) {
  const [count, setCount] = useState(0);
  const [paragraphLimit, setLimit] = useState(250);
  const [showSeeMore, setShowSeeMore] = useState(true);

  let paragraphText = `This will be the text of the review.It will include if people liked the product and what they thought.
  This is an extra sentence to test "see more" functionality.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus cursus tortor sit amet tellus feugiat, at cursus tortor euismod.
  Ut mi neque, viverra in elit sit amet, dapibus pharetra elit. Aenean eget euismod diam, a imperdiet tellus. Praesent ac.`;

  let shownText = paragraphText.substring(0, paragraphLimit);
  let seeMoreButton = <span>...<button onClick={() => {setLimit(paragraphText.length); setShowSeeMore(false)}}>See More</button></span>;

  if (!showSeeMore || paragraphText.length <= 250) {
    seeMoreButton = null;
  };

  let reviewTitle = 'Review title that is over 60 characters long. Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  let reviewTitleElement = <h3>{reviewTitle}</h3>;
  if (reviewTitle.length > 60) {
    reviewTitleElement = <div>
        <h3>{reviewTitle.substring(0, 60)}...</h3>
        <p>...{reviewTitle.substring(61, reviewTitle.length)}</p>
      </div>
  }


  return <div>
    <div>Star Rating</div>
    <span>Username and Date</span>
    {reviewTitleElement}
    <p>{shownText}{seeMoreButton}</p>
    <h4>{'\u2713'} I recommend this product</h4>
    <aside>
      <h4>Response from seller</h4>
      <p>Thanks for your review!</p>
    </aside>
    <label>
      Helpful?
      <button data-testid='counter' onClick={() => setCount(count + 1)}>Yes</button>
      <span>({count})</span>
    </label>
    <hr />
  </div>
}

export default Reviews;