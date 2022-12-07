import React from "react";

class AddToCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sizeValue: '0',
      quantityList: [],
      quantityValue: '0',
      showButton: true,
      selectedIndex: 0
    };
  }

  QuantityMaxList(stock) {
    var max = Math.min(15, stock);
    var quantityArr = [];
    for (let i = 1; i <= max; i++) {
      quantityArr.push(i);
    }
    // console.log(stock, quantityArr, '===============QuantityMaxList');
    return quantityArr;
  }

  // componentDidUpdate() {
  //   var quantityArr = this.QuantityMaxList(this.props.sizeList[0].quantity);
  //   // console.log(quantityArr, '================quantityArr first');
  //   if (this.state.quantityList.length === 0 && quantityArr.length !== 0) {
  //     this.setState({quantityList: quantityArr});
  //   }
  //   // console.log(this.state.quantityList, 'didUpdate');
  // }

  handleSizeChange(event) {
    // console.log(event.target.options.selectedIndex, 'handleSizeChange');
    var quantityArr = this.QuantityMaxList(event.target.value);
    this.setState({
      sizeValue: event.target.value,
      quantityList: quantityArr,
      selectedIndex: event.target.options.selectedIndex
    });
  }

  handleQuantityChange(event) {
    this.setState({
      quantityValue: event.target.value
    });
  }

  render() {
    // console.log(this.state.quantityList, '================this.state.quantityList');
    // console.log(this.props.sizeList, '================this.props.sizeList');
    //console.log(this.props.sizeList, this.state.selectedIndex, 'in render');
    return (
      <div>
        <div className="SizeSelector">
          Size:
          <select value={this.state.sizeValue} onChange={this.handleSizeChange.bind(this)}>
            {
              this.props.sizeList.map((item, index) => {
              return (
                <option key={index} value={item.size}>{item.size}</option>
              )
            })}
          </select>
        </div><br/>

        <div className="QuantitySelector">
          Quantity:
          <select value={this.state.quantityValue} onChange={this.handleQuantityChange.bind(this)}>
            {
              this.QuantityMaxList(this.props.sizeList[this.state.selectedIndex].quantity).map((quantity, index) => {
                return (
                  <option key={index} value={quantity}>{quantity}</option>
                )
            })}
          </select>
        </div><br/>

        <div className="AddToCart">
          {/* Size: {this.state.size} &emsp; Quantity: {this.state.quantity} <br/> */}
          {this.state.showButton ? (<button> Add To Cart </button>) : null}
        </div>

      </div>

    )
  }
}

export default AddToCart;