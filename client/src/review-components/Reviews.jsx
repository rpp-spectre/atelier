import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';

//include date, username, likes

function Reviews(props) {
  const [count, setCount] = useState(0);

  return <div>
    <div>Star Rating</div>
    <span>Username and Date</span>
    <h3>Review Title</h3>
    <p>This will be the text of the review. It will include if people liked the product and what they thought</p>
    <label>
      Helpful?
      <button data-testid='counter' onClick={() => setCount(count + 1)}>Yes</button>
      <span>({count})</span>
    </label>
    <hr />
  </div>
}

export default Reviews;