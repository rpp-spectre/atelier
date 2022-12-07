import React from "react";

class Title extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h2 className="Title">
        Title: {this.props.name}
      </h2>
    )
  }
}

export default Title;