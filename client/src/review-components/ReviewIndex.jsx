import React from 'react';
import ReactDOM from 'react-dom/client';
import ReviewList from './ReviewList.jsx';
import ReviewForm from './ReviewForm.jsx';

class ReviewSection extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
    <div>
      <h3>This will be the entire review section</h3>
      <ReviewList />
      <ReviewForm />
      </div>
    );
  }
}

export default ReviewSection;