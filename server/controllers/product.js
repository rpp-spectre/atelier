const axios = require('axios');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

exports.products = (req, res) => {

  var id = req.params.id;

  var productConfig = {
    method: 'get',
    url: `/products/${id}`,
    baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp',
    headers: {'Authorization': process.env.API_KEY}
  };

  axios(productConfig)
  .then((response) => {
    // console.log(response.data, '===========getProduct response data')
    var data = response.data;
    var featureName = data.features.feature? data.features.feature: '';
    var featureValue = data.features.value? data.features.value: '';
    var productInfo = {
      id: data.id? data.id: '',
      name: data.name? data.name: '',
      category: data.category? data.category: '',
      slogan: data.slogan? data.slogan: '',
      description: data.description? data.description: '',
      features: data.features? data.features: [{feature: featureName, value: featureValue}]
    };
    for (let i = 0; i < productInfo.features.length; i++) {
      if (!productInfo.features[i].feature) {
        productInfo.features[i].feature = '';
      }
      if (!productInfo.features[i].value) {
        productInfo.features[i].value = '';
      }
    }
    // console.log(productInfo, '===========getProduct response productInfo')
    res.json(productInfo);
  })
  .catch((error) => {
    console.log(error);
    res.json(error);
  });

}

exports.styles = (req, res) => {

  var id = req.params.id;

  var styleConfig = {
    method: 'get',
    url: `/products/${id}/styles`,
    baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp',
    headers: {Authorization: process.env.API_KEY}
  }

  axios(styleConfig)
  .then((response) => {
    // console.log(response.data, '===========getStyle response data')
    if (response.data.results === undefined || response.data.results.length === 0) {
      var data = [{}];
    } else {
      data = response.data.results;
    }
    var styleInfo = [];
    for (let i = 0; i < data.length; i++) {
      var currentStyle = {
        style_id:  data[i].style_id? data[i].style_id: '',
        name: data[i].name? data[i].name: '',
        original_price: data[i].original_price? data[i].original_price: '',
        sale_price: data[i].sale_price? data[i].sale_price: null,
        photos: data[i].photos? data[i].photos: [{thumbnail_url: '', url: ''}],
        skus: data[i].skus? data[i].skus: [{quantity: 0}]
      };
      styleInfo.push(currentStyle);
    }
    // console.log(styleInfo, '===========getStyle response styleInfo')
    res.json({results: styleInfo});
  })
  .catch((error) => {
    console.log(error);
    res.json(error);
  });

}



exports.cart = (req, res) => {

  var cartConfig = {
    method: 'post',
    url: `/cart`,
    baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp',
    headers: {Authorization: process.env.API_KEY},
    data: req.body
  }

  axios(cartConfig)
  .then((response) => {
    res.json(response.data);
  })
  .catch((error) => {
    console.log(error);
    res.json(error);
  });

}
