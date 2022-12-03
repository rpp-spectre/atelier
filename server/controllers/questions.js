const axios = require('axios');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });


exports.getQuestions = (req, res) =>{
  console.log('env', process.env);
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions?product_id=71697', {
  headers: {
    'Authorization': process.env.API_KEY
  }
  })
  .then((result)=>{
    // console.log(result.data);
    res.send(result.data);
  });
};

exports.sum = (a, b) =>{
  return a + b;
};


