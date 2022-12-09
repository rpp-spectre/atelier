import React from "react";

class Star extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Star">
        Star {'\u2606'}
      </div>
    )
  }
}

export default Star;