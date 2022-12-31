const express = require('express');
const controllerQ = require('./controllers/questions');
const reviews = require('./controllers/review.js');
const product = require('./controllers/product.js');
const cors = require('cors');
const compression = require('compression');


const app = express();

app.use(compression());
app.use(express.static('./client/dist'));
app.use(express.json());
app.use(cors());
app.use(compression());


//Product Overview
app.get('/products/:id', product.products);
app.get('/products/:id/styles', product.styles);
app.post('/cart', product.cart);

//Reviews
app.get('/reviews/:pid', reviews.getReviews);
app.post('/sortReviews/:pid', reviews.getReviews);
app.get('/reviewsMeta/:pid', reviews.getReviewMeta);
app.post('/reviews', reviews.postReview);
app.post('/reviews/:review_id/helpful', reviews.markHelpfulReview);

//Questions and Answers
app.get('/questions', controllerQ.getQuestions);
app.post('/questions', controllerQ.addQuestion);
app.get('/questions/:qid/answers', controllerQ.getAnswers);
app.post('/questions/:qid/answers', controllerQ.addAnswer);
app.put('/questions/:qid/helpful', controllerQ.changeQHelpful);
app.put('/answers/:aid/helpful', controllerQ.changeAHelpful);
app.put('/answers/:aid/report', controllerQ.areport);

app.listen(3000);