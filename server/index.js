const express = require("express");
// const controllerQ = require('./controllers/questions');


const app = express();

app.use(express.static("./client/dist"));
app.use(express.json());

// app.get("/questions", controllerQ.getQuestions);
// app.get("/questions/640996/answers", controllerQ.getAnswers);

app.listen(3000);