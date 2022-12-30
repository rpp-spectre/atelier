const axios = require('axios');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });
const AtelierAPI = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/'

exports.getReviews = (req, res) => {
  let sorting = 'relevant';
  if (req.body.data) {
    sorting = req.body.data;
  };
  axios({
    method: 'get',
    url: AtelierAPI + 'reviews?product_id=71810&count=25&sort=' + sorting,
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
    url: AtelierAPI + 'reviews/meta?product_id=71900',
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
    url: AtelierAPI + 'reviews/',
    headers: {'authorization': process.env.API_KEY},
    data: {
      product_id: Number(req.body.product_id),
      rating: Number(req.body.rating),
      summary: req.body.summary,
      body: req.body.body,
      recommend: req.body.recommend === 'true',
      name: req.body.name,
      email: req.body.email,
      photos: req.body.photos,
      characteristics: JSON.parse(JSON.stringify(req.body.characteristics))
    }
  })
  .then((result) => {
    res.sendStatus(201);
  })
  .catch((err) => {
    res.status(400);
    res.send(err);
  });
};

exports.markHelpfulReview = (req, res) => {
  axios({
    method: 'put',
    url: AtelierAPI + `reviews/${req.body.reviewId}/helpful`,
    headers: {'authorization': process.env.API_KEY}
  })
  .then((result) => {
    res.sendStatus(204);
  })
  .catch((err) => {
    console.log(err);
    res.send(err);
  });
};