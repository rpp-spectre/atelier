const express = require("express");
const controllerQ = require('./controllers/questions');
const product = require('./controllers/product.js');


const app = express();

app.use(express.static("./client/dist"));
app.use(express.json());

app.get('/products/:id', product.products);
app.get('/products/:id/styles', product.styles);

app.get("/questions", controllerQ.getQuestions);
app.get("/questions/:qid/answers", controllerQ.getAnswers);

app.listen(3000);