import React from "react";

class Detail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Detail">
        Detail:<br/>
        Slogan: {this.props.slogan} <br/>
        Description: {this.props.description} <br/>
      </div>
    )
  }
}

export default Detail;