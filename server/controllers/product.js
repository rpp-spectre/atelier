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
    var featureName = response.data.features.feature? response.data.features.feature: '';
    var featureValue = response.data.features.value? response.data.features.value: '';
    var productInfo = {
      id: response.data.id? response.data.id: '',
      name: response.data.name? response.data.name: '',
      category: response.data.category? response.data.category: '',
      slogan: response.data.slogan? response.data.slogan: '',
      description: response.data.description? response.data.description: '',
      features: response.data.features? response.data.features: [{feature: featureName, value: featureValue}]
    };
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
    console.log(response.data.results, '===========getStyle response data')
    var data = response.data.results? response.data.results: [];
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
    console.log(styleInfo, '===========getStyle response styleInfo')
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
