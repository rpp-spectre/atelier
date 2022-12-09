import React from "react";
import Stars from '../../review-components/Stars.jsx';

class StarRating extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="StarRating">
        <Stars rating={this.props.rating}/>
        <label style={{textDecorationLine: 'underline'}}>Read all {this.props.reviews} Reviews</label>
      </div>
    )
  }
}

export default StarRating;