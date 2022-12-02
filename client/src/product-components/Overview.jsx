import React from "react";

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    };
  }

  render() {
    return (
      <div className="Overview" data-testid="overview">
        =============Overview============<br/><br/>
        <div className="Container-left">
        ===Container-left===<br/>
        Pictures<br/>
        </div><br/>
        <div className="Container-right">
        ===Container-right===<br/>
        ReviewScore<br/>
        Title<br/>
        Style<br/>
        Size<br/>
        AddToBag  AddToWishlist<br/>
        </div><br/>
        <div className="Container-bottom">
        ===Container-bottom===<br/>
        Detail<br/>
        </div><br/>
      </div>
    )
  }
}

export default Overview;