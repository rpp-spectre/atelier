import React from "react";
const axios = require('axios');

class AddToCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sizeValue: 'SelectSize',
      quantityList: [],
      quantityValue: '0',
      showButton: true,
      selectedIndex: 0,
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
    if (event.target.value === 'SelectSize') {
      this.setState({
        quantityValue: '-',
        sizeValue: 'SelectSize'
      });
    } else {
      var quantityArr = this.QuantityMaxList(event.target.value);
      // console.log('in handleSizeChange', event.target.options.selectedIndex, event.target.value);
      this.setState({
        sizeValue: event.target.value,
        quantityList: quantityArr,
        selectedIndex: event.target.options.selectedIndex-1
      });
    }

  }

  handleQuantityChange(event) {
    this.setState({
      quantityValue: event.target.value
    });
  }

  handleAddToCart() {
    axios.post('/cart', {
      sku_id: this.props.sizeList[this.state.selectedIndex].sku,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  }

  render() {
    // console.log(this.state.quantityList, '================this.state.quantityList');
    // console.log(this.props.sizeList, this.state.selectedIndex, '================this.props.sizeList');
    //console.log(this.props.sizeList, this.state.selectedIndex, 'in render');
    return (
      <div className='SizeQuantityCart'>
        <div className='SizeAndQuantity'>
          <div className="Size">
            <select className="SizeSelector" data-testid='SizeSelector' value={this.state.sizeValue} disabled={this.props.sizeOutOfStock} onChange={this.handleSizeChange.bind(this)}>
              <option value={'SelectSize'}>{this.props.sizeOutOfStock ? 'OUT OF STOCK' : 'Select Size'}</option>
              {
                this.props.sizeList.map((item, index) => {
                  return (
                    <option key={index} value={item.size}>{item.size}</option>
                  )
              })}
            </select>
          </div>

          <div className="Quantity">
            <select className="QuantitySelector" data-testid='QuantitySelector' value={this.state.quantityValue} onChange={this.handleQuantityChange.bind(this)}>
              {this.state.sizeValue === 'SelectSize' ?  (<option value={'-'}> - </option>) :
                this.QuantityMaxList(this.props.sizeList[this.state.selectedIndex].quantity).map((quantity, index) => {
                  return (
                    <option key={index} value={quantity}>{quantity}</option>
                  )
                })
              }
            </select>
          </div>
        </div>

        <div className="Cart">
          {!this.props.sizeOutOfStock ? (<button className='AddToCart' onClick={this.handleAddToCart.bind(this)}> Add To Cart </button>) : null}
          <div className="Star">
            {'\u2606'}
          </div>
        </div>
      </div>


    )
  }
}

export default AddToCart;