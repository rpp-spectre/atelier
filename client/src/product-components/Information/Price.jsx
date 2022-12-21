import React from "react";

class Price extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Price">
        $ {this.props.price}
      </div>
    )
  }
}

export default Price;