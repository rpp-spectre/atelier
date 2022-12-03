import React from "react";

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      // <div className="ImageGallery">
      //   ImageGallery
      // </div>
      <div>
        {this.props.photos.map((photo, index) => {
          return (
            <img key={index} src={photo} alt="ProductIMG" />
          )
        })}
      </div>
    )
  }
}

export default ImageGallery;