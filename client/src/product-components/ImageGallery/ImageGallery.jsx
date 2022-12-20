import React from "react";
import './ImageGallery.css';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    // this.showNum = Math.min(this.props.photos.length, 7);
    this.state = {
      slideIndex: 0,
      startIndex: 0,
      fullScreen: false
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

  componentDidMount() {
    addEventListener('fullscreenchange', (event) => {
      let elem = document.getElementById('container');
      this.setState({fullScreen: document.fullscreenElement});
    })
  }

  openFullScreen() {
    // document.getElementById('slideImage').requestFullscreen({ navigationUI: "show" });

    let elem = document.getElementById('container')
    if (!document.fullscreenElement) {
      elem.requestFullscreen({ navigationUI: "show" }).catch((err) => {
        alert(`Error attempting to enable fullscreen mode: ${err.message} (${err.name})`);
      });
    } else {
      document.exitFullscreen();
    }
  }


  render() {
    // console.log('this.props', this.props.photos.length)
    return (
      <div className="container" id='container'>
          {this.props.photos.map((photo, index) => {
            if (index !== this.state.slideIndex) {
              return
            }
            return (
              <div className={this.state.fullScreen ? "mySlidesFull" : "mySlides"} key={index}>
                <div className="numbertext">{index+1} / {this.props.photos.length}</div>
                <img className="slideImage" id="slideImage" onClick={this.openFullScreen.bind(this)} src={photo.url} />
              </div>
            )
          })}

          {this.state.slideIndex === 0 ? null : <a className="prev" onClick={() => this.plusSlides(-1)}>❮</a>}
          {this.state.slideIndex === this.props.photos.length - 1 ? null : <a className={this.state.fullScreen ? "nextFull" : "next"} onClick={() => this.plusSlides(1)}>❯</a>}

          <div className={this.state.fullScreen ? "rowFull" : "row"}>
            {this.state.startIndex !== 0 ? <div data-testid="upArrow" className={this.state.fullScreen ? "columnFull upArrow" : "column upArrow"} onClick={this.handleArrowUp.bind(this)}><i className={this.state.fullScreen ? "arrow upFull" : "arrow up"}></i></div> : <div className={this.state.fullScreen ? "columnFull" : "column"}></div>}
            {this.props.photos.map((photo, index) => {
              if (index < this.state.startIndex || index >= this.state.startIndex+this.props.showNum()) {
                return;
              }
              return (
                <div className={this.state.fullScreen ? "columnFull" : "column"} key={index} >
                  <img src={photo.thumbnail_url} className={(this.state.slideIndex === index)? "demo cursor active" : "demo cursor"} onClick={() => this.currentSlide(index)} alt="Default"/>
                </div>
              )
            })}
            {this.state.startIndex + this.props.showNum() < this.props.photos.length ? <div data-testid="downArrow" className={this.state.fullScreen ? "columnFull downArrow" : "column downArrow"} onClick={this.handleArrowDown.bind(this)}><i className={this.state.fullScreen ? "arrow downFull" : "arrow down"}></i></div> : null}
          </div>
      </div>
    )
  }
}

export default ImageGallery;