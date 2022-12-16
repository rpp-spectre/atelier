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
    res.json(response.data);
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
    // console.log(response.data.results, '===========getStyle response data')
    res.json(response.data);
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
