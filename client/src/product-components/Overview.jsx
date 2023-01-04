import React from "react";
import ImageGallery from "./ImageGallery/ImageGallery.jsx";
import StarRating from "./Information/StarRating.jsx";
import Category from "./Information/Category.jsx";
import Title from "./Information/Title.jsx";
import Price from "./Information/Price.jsx";
import Detail from "./Information/Detail.jsx";
import Style from "./Style/Style.jsx";
import AddToCart from "./AddToCart/AddToCart.jsx";
import defaultURL from "./ImageGallery/defaultImage/default.jpg";
import './product.css';
const axios = require('axios');


class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: 0,
      salePrice: 0,
      photos: [{url: defaultURL}],
      styleList: [{style_id: '', name: '', photos: [{thumbnail_url: defaultURL}]}],
      sizeList: [{quantity: 0}],
      sizeOutOfStock: false
    };
  }

  getSizeList(sizeObj) {
    var sizeArr = Object.keys(sizeObj).sort();
    var sizeList = [];
    for (let i = 0; i < sizeArr.length; i++) {
      var obj =  sizeObj[sizeArr[i]];
      obj['sku'] =  sizeArr[i];
      if (obj.quantity !== 0) {
        sizeList.push(obj);
      }
    }
    return sizeList;
  }

  getSizeStock(sizeObj) {
    var stock = 0;
    for (var i in sizeObj) {
      stock += sizeObj[i].quantity;
    }
    if (stock <= 0) {
      return true;
    }
    return false;
  }

  getStyle() {

    axios.get(`/products/${this.props.pid}/styles`)
    .then((response) => {
      this.setState({
        styleList: response.data.results,
        price: response.data.results[0].original_price,
        salePrice: response.data.results[0].sale_price,
        photos: response.data.results[0].photos
      });

      var stock = this.getSizeStock(response.data.results[0].skus);

      if (stock) {
        this.setState({
          sizeOutOfStock: true,
          sizeList: [{size: "OUT OF STOCK", quantity: 0}]
        });
      } else {
        this.setState({
          sizeOutOfStock: false,
          sizeList: this.getSizeList(response.data.results[0].skus)
        });
      }
    })
    .catch((error) => {
      console.log(error);
    });
  }

  getRating(reviewMeta) {

    if (reviewMeta === null) {
      return 0;
    }

    var ratingsData = reviewMeta.ratings;
    var weightedTotal = 0;
    var numberOfReviews = 0;

    for (var i = 1; i <= 5; i++) {
      if (ratingsData[i] === undefined) {
        ratingsData[i] = 0;
      }
      ratingsData[i] = Number.parseInt(ratingsData[i]);
      weightedTotal += ratingsData[i] * i;
      numberOfReviews += ratingsData[i];
    }

    var averageRating = Math.round(weightedTotal / numberOfReviews * 10) / 10;
    return averageRating;
  }

  componentDidMount() {
    this.getStyle();
  }

  componentDidUpdate(prevState) {
    if (this.state.slideIndex === prevState.slideIndex) {
      return;
    }
  }

  changeStyle(newPhotos, newSizeList, newPrice, newSalePrice) {
    this.setState({
      photos: newPhotos,
      sizeList: this.getSizeList(newSizeList),
      price: newPrice,
      salePrice: newSalePrice
    });
  }

  resizeImage(url) {
    var arr = url.split('&');
    for (let i = 0; i < arr.length; i++) {
      if (arr[i][0] === 'w' && arr[i][1] === '=') {
        var width = Number(arr[i].slice(2));
        arr[i] = "w=" + Math.floor(width * 0.6).toString();
      }
      if (arr[i][0] === 'q' && arr[i][1] === '=') {
        var width = Number(arr[i].slice(2));
        arr[i] = 'q=' + Math.floor(width * 0.6).toString();
      }
    }
    var newRUL = arr.join('&');
    return newRUL;
  }


  render() {
    return (
      <div className="Overview" data-testid="overview">
        <div className="Container-top">
          <div className="Container-left">
          <ImageGallery photos={this.state.photos} resizeImage={this.resizeImage.bind(this)} showNum={() => Math.min(this.state.photos.length, 7)}/><br/>
          </div><br/>
          <div className="Container-right">
          <StarRating rating={this.getRating(this.props.reviewMeta)} reviews={this.props.reviewCount}/><br/>
          <Category category={this.props.productInfo.category}/>
          <Title name={this.props.productInfo.name}/>
          <Price price={this.state.price} salePrice={this.state.salePrice}/><br/>
          <Style styleList={this.state.styleList} changeStyle={this.changeStyle.bind(this)} resizeImage={this.resizeImage.bind(this)}/><br/>
          <AddToCart sizeList={this.state.sizeList} sizeOutOfStock={this.state.sizeOutOfStock}/><br/>
          </div><br/>
        </div>
        <div className="Container-bottom">
        <Detail slogan={this.props.productInfo.slogan} description={this.props.productInfo.description} features={this.props.productInfo.features}/>
        </div><br/>
      </div>
    )
  }
}

export default Overview;