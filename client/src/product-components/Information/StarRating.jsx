import React from "react";
import Stars from '../../review-components/Stars.jsx';

class StarRating extends React.Component {
  constructor(props) {
    super(props);
  }

  handleReviewClick() {
    document.getElementById("review-section").scrollIntoView();

    var clickData = {
      element: 'ReadAllReviews',
      time: new Date(),
      module: 'Overview'
    };
    this.props.handleClickTracking(clickData);
  }

  render() {
    return (
      <div className="StarRating">
        <Stars rating={this.props.rating}/>&ensp;
        {this.props.reviews? <label className='Reviews' onClick={this.handleReviewClick.bind(this)}>Read all {this.props.reviews} Reviews</label> : null}

      </div>
    )
  }
}

export default StarRating;