const express = require('express');
const controllerQ = require('./controllers/questions');
const reviews = require('./controllers/review.js');
const product = require('./controllers/product.js');


const app = express();

app.use(express.static('./client/dist'));
app.use(express.json());

//Product Overview
app.get('/products/:id', product.products);
app.get('/products/:id/styles', product.styles);

//Reviews
app.get('/reviews', reviews.getReviews);
app.get('/reviewsMeta', reviews.getReviewMeta);

//Questions and Answers
app.get('/questions', controllerQ.getQuestions);
app.get('/questions/:qid/answers', controllerQ.getAnswers);

app.listen(3000);