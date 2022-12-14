import React from "react";
import defaultURL from "../ImageGallery/defaultImage/default.jpg";

class Style extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // CheckedKey: 'default',
      styleName: '',
      checkedIndex: 0
    }
  }

  toggleCheckbox(e, style, index) {
    if (style.style_id !== this.state.CheckedKey) {
      this.setState({
        // CheckedKey: style.style_id,
        styleName: style.name,
        checkedIndex: index
      })
      this.props.changeStyle(style.photos, style.skus, style.original_price, style.sale_price);
    }

    // var clickData = {
    //   element: 'StyleImage',
    //   time: new Date(),
    //   module: 'Overview'
    // };
    this.props.handleClickTracking(e);
  }

  // componentDidUpdate() {
  //   if(this.props.styleList.length !== 0 && this.state.CheckedKey === 'default' && this.props.styleList[0].name !== 'default') {
  //     this.setState({
  //       CheckedKey: this.props.styleList[0].style_id,
  //       styleName: this.props.styleList[0].name
  //     })
  //   }
  // }


  render() {
    // console.log(this.props.styleList, '====================styleList');
    return (
      <div className="Style">
        <div className='StyleName'>
          <label className='StyleBold'>Style ></label>&ensp;
          <label>
          {this.state.styleName === '' ? this.props.styleList[0].name : this.state.styleName}
          </label>
        </div>
        <div className='StyleList'>
          {this.props.styleList.map((style, index) => {

            var styleImage = defaultURL;
            if (style.photos[0].thumbnail_url !== null && style.photos[0].thumbnail_url !== '') {
              styleImage = this.props.resizeImage(style.photos[0].thumbnail_url);
            }

            return (
              <div key={style.style_id} className="styleLable">
                <img className="stylePhoto" key={style.style_id} onClick={(e) => this.toggleCheckbox(e, style, index)} src={styleImage} alt={style.name} />
                {this.state.checkedIndex === index ? <label className='checkboxLable'><input className='checkbox' type="checkbox" id={style.style_id} checked={true} onChange={() => {}}></input></label> : null}
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Style;