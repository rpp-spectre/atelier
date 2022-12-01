import React from 'react';
import ReactDOM from 'react-dom/client';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form>
        <label>
        Submit a review:
        <textarea placeholder='Write your review' />
        </label>
        <div>
          <input type='checkbox' />
          <label>I recommend this product</label>
        </div>
        <div>
          <input type='submit' value='Submit Review' />
        </div>
      </form>
    );
  }
};

export default ReviewForm;