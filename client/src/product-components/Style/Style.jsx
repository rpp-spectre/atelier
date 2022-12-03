import React from "react";

class Style extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Style">
        Style > &ensp;{this.props.currentStyle.styleName}<br/>
        {this.props.styleList.map((style) => {
          return (
            <img key={style.styleId} src={style.stylePhoto} alt="styleIMG" />
          )
        })}
      </div>
    )
  }
}

export default Style;