import React from "react";

class Detail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Detail">
        Slogan: {this.props.slogan} <br/><br/>
        Description: {this.props.description} <br/><br/>
        Features: {this.props.features.map((item) => {
          return (
            <div key={item.feature}>{item.feature}: {item.value}</div>
          )
        })} <br/>
      </div>
    )
  }
}

export default Detail;