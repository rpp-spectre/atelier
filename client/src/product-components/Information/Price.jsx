import React from "react";

class Price extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="price">
        {this.props.salePrice ? <label className='sale_price'>${this.props.salePrice}</label> : null } 
        {this.props.salePrice ? <label><strike>${this.props.price}</strike></label> : <label>${this.props.price}</label> }
        {/* ${this.props.price} */}
      </div>
    )
  }
}

export default Price;