import React from "react";
import './ImageGallery.css';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    // this.showNum = Math.min(this.props.photos.length, 7);
    this.state = {
      slideIndex: 0,
      startIndex: 0,
      // showNum: Math.min(this.props.photos.length, 7)
    }
  }

  plusSlides(n) {
    var newIndex = this.state.slideIndex + n;
    // if (newIndex >= this.props.photos.length) {
    //   newIndex =  this.props.photos.length - 1;
    // } else if (newIndex < 0) {
    //   newIndex = 0;
    // }

    var newStartIndex = this.state.startIndex;
    if (newIndex - this.props.showNum() + 1 >= 0) {
      newStartIndex = newIndex - this.props.showNum() + 1;
    }

    this.setState({
        slideIndex: newIndex,
        startIndex: newStartIndex
    })

  }

  currentSlide(index) {
    this.setState({slideIndex: index});
  }

  handleArrowUp() {
    var newstartIndex = Math.max(this.state.startIndex-3, 0);
    this.setState({
      startIndex: newstartIndex
    });
  }

  handleArrowDown() {
    var newstartIndex = Math.min(this.state.startIndex+3, this.props.photos.length-1);
    this.setState({
      startIndex: newstartIndex
    });
  }

  openFullScreen() {
    // document.getElementById('slideImage').requestFullscreen({ navigationUI: "show" });

    // let elem = document.getElementById('container');

    // if (!document.fullscreenElement) {
    //   elem.requestFullscreen({ navigationUI: "show" }).catch((err) => {
    //     alert(`Error attempting to enable fullscreen mode: ${err.message} (${err.name})`);
    //   });
    // } else {
    //   document.exitFullscreen();
    // }
  }


  render() {
    // console.log('this.props', this.props.photos.length)
    return (
      // <div className='ImageGallery'>
      //   {this.props.photos.map((photo, index) => {
      //     return (
      //       <img className="photo" key={index} src={photo.url} alt="ProductIMG" />
      //     )
      //   })}
      // </div>


      <div className="container" id='container'>
          {this.props.photos.map((photo, index) => {
            if (index !== this.state.slideIndex) {
              return
            }
            return (
              <div className="mySlides" key={index}>
                <div className="numbertext">{index+1} / {this.props.photos.length}</div>
                <img className="slideImage" id="slideImage" onClick={this.openFullScreen.bind(this)} src={photo.url} />
              </div>
            )
          })}

          {this.state.slideIndex === 0 ? null : <a className="prev" onClick={() => this.plusSlides(-1)}>❮</a>}
          {this.state.slideIndex === this.props.photos.length - 1 ? null : <a className="next" onClick={() => this.plusSlides(1)}>❯</a>}

          <div className="row">
            {this.state.startIndex !== 0 ? <div data-testid="upArrow" className='upArrow column' onClick={this.handleArrowUp.bind(this)}><i className="arrow up"></i></div> : null}
            {this.props.photos.map((photo, index) => {
              if (index < this.state.startIndex || index >= this.state.startIndex+this.props.showNum()) {
                return;
              }
              return (
                <div className="column" key={index} >
                  <img src={photo.thumbnail_url} className={(this.state.slideIndex === index)? "demo cursor active" : "demo cursor"} onClick={() => this.currentSlide(index)} alt="Default"/>
                </div>
              )
            })}
            {this.state.startIndex + this.props.showNum() < this.props.photos.length ? <div data-testid="downArrow" className='downArrow column' onClick={this.handleArrowDown.bind(this)}><i className="arrow down"></i></div> : null}
          </div>
      </div>
    )
  }
}

export default ImageGallery;