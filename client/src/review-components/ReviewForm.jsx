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
        <div>
          <textarea placeholder='Write your review' rows='5' cols='50' maxlength='1000' minlength='50'/>
        </div>
        </label>
        <div>
          <label>
            Upload an image:
            <input type='file' accept='image/jpeg, image/png' multiple/>
          </label>
        </div>
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