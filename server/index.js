const express = require('express');
const controllerQ = require('./controllers/questions');
const reviews = require('./controllers/review.js');


const app = express();

app.use(express.static('./client/dist'));
app.use(express.json());

//Product Overview

//Reviews
app.get('/reviews', reviews.getReviews);
app.get('/reviewsMeta', reviews.getReviewMeta);

//Questions and Answers
app.get('/questions', controllerQ.getQuestions);
app.get('/questions/:qid/answers', controllerQ.getAnswers);

app.listen(3000);