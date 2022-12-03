import React from "react";
import ImageGallery from "./ImageGallery/ImageGallery.jsx";
import StarRating from "./Information/StarRating.jsx";
import Category from "./Information/Category.jsx";
import Title from "./Information/Title.jsx";
import Price from "./Information/Price.jsx";
import Detail from "./Information/Detail.jsx";
import Star from "./Information/Star.jsx";
import Style from "./Style/Style.jsx";
import AddToCart from "./AddToCart/AddToCart.jsx";

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: ['', '', ''],
      rating: 4,
      reviews: 7,
      category: 'Basketball Shoes',
      name: 'Air Minis 250',
      price: '$100',
      slogan: 'Full court support',
      description: 'This optimized air cushion pocket reduces impact but keeps a perfect balance underfoot.',
      styleList: [
        {
          styleId: 1,
          styleName: 'Forest Green & Black',
          stylePhoto: 'urlplaceholder/style_1_photo_number_thumbnail.jpg'
        },
        {
          styleId: 2,
          styleName: 'Desert Brown & Tan',
          stylePhoto: 'urlplaceholder/style_2_photo_number_thumbnail.jpg'
        }
      ],
      currentStyle: {
        styleId: 1,
        styleName: 'Forest Green & Black',
        stylePhoto: 'urlplaceholder/style_1_photo_number_thumbnail.jpg'
      }
    };
  }

  render() {
    return (
      <div className="Overview" data-testid="overview">
        ==========================Product Overview=========================<br/><br/>
        <div className="Container-top">
          <div className="Container-left">
          <ImageGallery photos={this.state.photos}/><br/>
          </div><br/>
          <div className="Container-right">
          <StarRating rating={this.state.rating} reviews={this.state.reviews}/>
          <Category category={this.state.category}/>
          <Title name={this.state.name}/>
          <Price price={this.state.price}/><br/>
          <Style styleList={this.state.styleList} currentStyle={this.state.currentStyle}/><br/>
          <AddToCart /><br/>
          <Star />
          </div><br/>
        </div>
        <div className="Container-bottom">
        <Detail slogan={this.state.slogan} description={this.state.description}/>
        </div><br/>
        ==========================Product Overview=========================<br/><br/>
      </div>
    )
  }
}

export default Overview;