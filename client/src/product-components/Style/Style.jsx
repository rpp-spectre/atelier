import React from "react";

class Style extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      CheckedKey: 'default',
      styleName: 'default'
    }
  }

  toggleCheckbox(e, style) {
    if (style.style_id !== this.state.CheckedKey) {
      this.setState({
        CheckedKey: style.style_id,
        styleName: style.name
      })
      this.props.changeStyle(style.photos, style.skus, style.original_price);
    }
  }

  componentDidUpdate() {
    if(this.props.styleList.length !== 0 && this.state.CheckedKey === 'default' && this.props.styleList[0].name !== 'default') {
      this.setState({
        CheckedKey: this.props.styleList[0].style_id,
        styleName: this.props.styleList[0].name
      })
    }
  }



  render() {
    // console.log(this.props.styleList, '====================styleList');
    return (
      <div className="Style">
        Style > &ensp;{this.state.styleName}<br/>
        {this.props.styleList.map((style) => {
          return (
            <label key={style.style_id} className="styleLable">
              <img className="stylePhoto" key={style.style_id} onClick={(e) => this.toggleCheckbox(e, style)} src={style.photos[0].thumbnail_url} alt="styleIMG" />
              {this.state.CheckedKey === style.style_id ? <input type="checkbox" id="myCheck" checked={true} onChange={() => {}}></input> : null}
            </label>
          )
        })}
      </div>
    )
  }
}

export default Style;