import React from "react";

class AddToCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: 'S',
      quantity: 1,
      showButton: true
    };
  }

  render() {
    return (
      <div className="AddToCart">
        Size: {this.state.size} &emsp; Quantity: {this.state.quantity} <br/>
        {this.state.showButton ? (<button> Add To Cart </button>) : null}
      </div>
    )
  }
}

export default AddToCart;