import React from "react";

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
  }

  plusSlides() {

  }

  currentSlide() {

  }



  render() {
    return (
      <div className='ImageGallery'>
        {this.props.photos.map((photo, index) => {
          return (
            <img className="photo" key={index} src={photo.url} alt="ProductIMG" />
          )
        })}
      </div>
      // <div className="container">
      //     <div class="mySlides">
      //       <div class="numbertext">1 / 6</div>
      //       <img src="img_woods_wide.jpg" style="width:100%">
      //     </div>
      //     {this.props.photos.map((photo, index) => {
      //       return (
      //         <div className="mySlides" key={index}>
      //           <div className="numbertext">{index+1} / {this.props.photos.length}</div>
      //           <img src={photo.url} />
      //         </div>
      //       )
      //     })}

      //     <a className="prev" onClick={() => this.plusSlides(-1)}>❮</a>
      //     <a className="next" onClick={() => plusSlides(1)}>❯</a>

      //     <div className="row">
      //       {this.props.photos.map((photo, index) => {
      //         return (
      //           <div className="column" key={index}>
      //             <img className="demo cursor" src={photo.thumbnail_url} onClick={() => this.currentSlide(1)} alt="Default"/>
      //           </div>
      //         )
      //       })}
      //     </div>
      // </div>
    )
  }
}

export default ImageGallery;