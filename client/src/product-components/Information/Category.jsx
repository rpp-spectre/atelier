import React from "react";

class Category extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Category">
        Category: {this.props.category}
      </div>
    )
  }
}

export default Category;