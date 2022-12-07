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
import './product.css';
const axios = require('axios');



class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: 'default',
      category: 'default',
      price: 0,
      slogan: 'default',
      description: 'default',
      features: [{feature: 'default', value: 'default'}],

      photos: [{url: ''}],
      rating: 0,
      reviews: 0,

      styleList: [{style_id: '', name: 'default', photos: [{thumbnail_url: ''}]}],
      currentStyle: {skus: {}},
      sizeList: [{quantity: 0}]
    };
  }

  getSizeList(sizeObj) {
    var sizeArr = Object.keys(sizeObj).sort();
    var sizeList = [];
    for (let i = 0; i < sizeArr.length; i++) {
      // console.log(sizeArr[i], sizeObj[sizeArr[i]], '===========mark');
      var obj =  sizeObj[sizeArr[i]];
      obj['sku'] =  sizeArr[i];
      sizeList.push(obj);
    }
    // console.log(sizeObj, sizeList, '=============sizeList');
    return sizeList;
  }


  getProduct() {
    var productConfig = {
      method: 'get',
      url: '/products/71697',
      baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp',
      headers: {Authorization: process.env.API_KEY}
    };

    axios(productConfig)
    .then((response) => {
      // console.log(response.data, '===========getProduct response data')
      var productData = {
        id: response.data.id,
        name: response.data.name,
        category: response.data.category,
        // price: response.data.default_price,
        slogan: response.data.slogan,
        description: response.data.description,
        features: response.data.features
      }
      this.setState(productData);
    })
    .catch((error) => {
      console.log(error);
    });
  }


  getStyle() {
    var styleConfig = {
      method: 'get',
      url: '/products/71697/styles',
      baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp',
      headers: {Authorization: process.env.API_KEY}
    }

    axios(styleConfig)
    .then((response) => {
      // console.log(response.data.results, '===========getStyle response data')
      this.setState({styleList: response.data.results});
      this.setState({currentStyle: response.data.results[0]});
      this.setState({price: response.data.results[0].original_price});
      this.setState({photos: response.data.results[0].photos});

      this.setState({sizeList: this.getSizeList(response.data.results[0].skus)});
    })
    .catch((error) => {
      console.log(error);
    });
  }


  componentDidMount() {
    this.getProduct();
    this.getStyle();
  }

  changeStyle(newPhotos, newSizeList, newPrice) {
    this.setState({
      photos: newPhotos,
      sizeList: this.getSizeList(newSizeList),
      price: newPrice
    });
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
          <Style styleList={this.state.styleList} changeStyle={this.changeStyle.bind(this)} currentStyle={this.state.currentStyle}/><br/>
          <AddToCart currentStyle={this.state.currentStyle} sizeList={this.state.sizeList}/><br/>
          <Star />
          </div><br/>
        </div>
        <div className="Container-bottom">
        <Detail slogan={this.state.slogan} description={this.state.description} features={this.state.features}/>
        </div><br/>
        ==========================Product Overview=========================<br/><br/>
      </div>
    )
  }
}

export default Overview;