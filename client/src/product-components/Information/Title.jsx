import React from "react";

class Title extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Title">
        Title: {this.props.name} + [styleName]
      </div>
    )
  }
}

export default Title;