const axios = require('axios');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });
const AtelierAPI = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/'

exports.getReviews = (req, res) => {
  axios({
    method: 'get',
    url: AtelierAPI + 'reviews?product_id=71810',
    headers: {'authorization': process.env.API_KEY}
  })
  .then((result) => {
    res.send(result.data);
  })
  .catch((err) => {
    console.log(err);
    res.send(err);
  });
};

exports.getReviewMeta = (req, res) => {
  axios({
    method: 'get',
    url: AtelierAPI + 'reviews/meta?product_id=71810',
    headers: {'authorization': process.env.API_KEY}
  })
  .then((result) => {
    res.send(result.data);
  })
  .catch((err) => {
    console.log(err);
    res.send(err);
  });
};

exports.postReview = (req, res) =>{
  axios({
    method: 'post',
    url: AtelierAPI + 'reviews/meta?product_id=1',
    headers: {'authorization': process.env.API_KEY}
  })
  .then((result) => {
    res.send(result.data);
  })
  .catch((err) => {
    console.log(err);
    res.send(err);
  });
};