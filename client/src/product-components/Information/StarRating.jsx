import React from "react";

class StarRating extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="StarRating">
        StarRating: {this.props.rating} &emsp;
        <label style={{textDecorationLine: 'underline'}}>Read all {this.props.reviews} Reviews</label>
      </div>
    )
  }
}

export default StarRating;