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
      salePrice: 0,
      slogan: 'default',
      description: 'default',
      features: [{feature: 'default', value: 'default'}],

      photos: [{url: ''}],

      styleList: [{style_id: '', name: '', photos: [{thumbnail_url: ''}]}],
      sizeList: [{quantity: 0}],
      sizeOutOfStock: true
    };
  }

  getSizeList(sizeObj) {
    var sizeArr = Object.keys(sizeObj).sort();
    var sizeList = [];
    for (let i = 0; i < sizeArr.length; i++) {
      // console.log(sizeArr[i], sizeObj[sizeArr[i]], '===========mark');
      var obj =  sizeObj[sizeArr[i]];
      obj['sku'] =  sizeArr[i];
      if (obj.quantity !== 0) {
        sizeList.push(obj);
      }
    }
    // console.log(sizeObj, sizeList, '=============sizeList');
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


  getProduct() {

    axios.get(`/products/${this.props.pid}`)
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

    axios.get(`/products/${this.props.pid}/styles`)
    .then((response) => {
      // console.log(response.data.results, '===========getStyle response data')

      this.setState({
        styleList: response.data.results,
        // currentStyle: response.data.results[0],
        price: response.data.results[0].original_price,
        salePrice: response.data.results[0].sale_price,
        photos: response.data.results[0].photos
      });

      var stock = this.getSizeStock(response.data.results[0].skus);
      // var stock = true;
      // var testData = {
      //   '123': {size: 'XS', quantity: 0},
      //   '124': {size: 'S', quantity: 0}
      // };
      if (stock) {
        this.setState({
          sizeOutOfStock: true,
          sizeList: [{size: "OUT OF STOCK", quantity: 0}]
        });
      } else {
        this.setState({
          sizeOutOfStock: false,
          sizeList: this.getSizeList(response.data.results[0].skus)
          // sizeList: this.getSizeList(testData)
        });
      }
      // this.setState({currentStyle: response.data.results[0]});
      // this.setState({price: response.data.results[0].original_price});
      // this.setState({photos: response.data.results[0].photos});

      // this.setState({sizeList: this.getSizeList(response.data.results[0].skus)});
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
    this.getProduct();
    this.getStyle();
  }

  changeStyle(newPhotos, newSizeList, newPrice, newSalePrice) {
    this.setState({
      photos: newPhotos,
      sizeList: this.getSizeList(newSizeList),
      price: newPrice,
      salePrice: newSalePrice
    });
  }



  render() {
    return (
      <div className="Overview" data-testid="overview">
        <div className="Container-top">
          <div className="Container-left">
          <ImageGallery photos={this.state.photos} showNum={() => Math.min(this.state.photos.length, 7)}/><br/>
          </div><br/>
          <div className="Container-right">
          <StarRating rating={this.getRating(this.props.reviewMeta)} reviews={this.props.reviewCount}/><br/>
          <Category category={this.state.category}/>
          <Title name={this.state.name}/>
          <Price price={this.state.price} salePrice={this.state.salePrice}/><br/>
          <Style styleList={this.state.styleList} changeStyle={this.changeStyle.bind(this)}/><br/>
          <AddToCart sizeList={this.state.sizeList} sizeOutOfStock={this.state.sizeOutOfStock}/><br/>
          {/* <Star /> */}
          </div><br/>
        </div>
        <div className="Container-bottom">
        <Detail slogan={this.state.slogan} description={this.state.description} features={this.state.features}/>
        </div><br/>
      </div>
    )
  }
}

export default Overview;