const express = require('express');
const controllerQ = require('./controllers/questions');
const reviews = require('./controllers/review.js');
const product = require('./controllers/product.js');
const cors = require('cors');


const app = express();


app.use(express.static('./client/dist'));
app.use(express.json());
app.use(cors());


//Product Overview
app.get('/products/:id', product.products);
app.get('/products/:id/styles', product.styles);
app.post('/cart', product.cart);

//Reviews
app.get('/reviews', reviews.getReviews);
app.get('/reviewsMeta', reviews.getReviewMeta);

//Questions and Answers
app.get('/questions', controllerQ.getQuestions);
app.post('/questions', controllerQ.addQuestion);
app.get('/questions/:qid/answers', controllerQ.getAnswers);
app.put('/questions/:qid/helpful', controllerQ.changeQHelpful);
app.put('/answers/:aid/helpful', controllerQ.changeAHelpful);
app.put('/answers/:aid/report', controllerQ.areport);

app.listen(3000);