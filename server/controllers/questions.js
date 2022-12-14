const axios = require('axios');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });


exports.getQuestions = (req, res) =>{
  let apiGetQ = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions?product_id=';
  let pid = req.query.product_id;
  axios.get(apiGetQ+pid, {
  headers: {
    'Authorization': process.env.API_KEY
  }
  })
  .then((result)=>{
    // console.log(result.data);
    res.send(result.data);
  });
};

exports.getAnswers = (req, res) =>{
  let qid=req.params.qid;
  let apiGetA = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions/${qid}/answers`;
  axios.get(apiGetA, {
  headers: {
    'Authorization': process.env.API_KEY
  }
  })
  .then((result)=>{
    // console.log(result.data);
    res.send(result.data);
  });
};

exports.changeQHelpful = (req, res) =>{
  let qid = req.params.qid;
  // console.log('qid', qid);
  let apiCH = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions/${qid}/helpful`;
  axios.put(apiCH, `question_id=${qid}`, {
  headers: {
    'Authorization': process.env.API_KEY
  }
  })
  .then((result)=>{
    // console.log(result);
    res.send('helpfulness updated');
  })
  .catch((error) =>{
    res.send(error);
  });
};

exports.changeAHelpful = (req, res) =>{
  let aid = req.params.aid;
  console.log('aid', aid);
  let apiCH = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/answers/${aid}/helpful`;
  axios.put(apiCH, `question_id=${aid}`, {
  headers: {
    'Authorization': process.env.API_KEY
  }
  })
  .then((result)=>{
    // console.log(result);
    res.send('helpfulness updated');
  })
  .catch((error) =>{
    res.send(error);
  });
};

exports.addQuestion = (req, res) =>{
  let apiGetQ = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions/';
  let body = req.query.body;
  let name = req.query.name;
  let email = req.query.email;
  let productId = req.query.product_id;
  axios.post(apiGetQ, {
    "body": body,
    "name": name,
    "email": email,
    "product_id": parseInt(productId)
    },
    {
    headers: {
    'Authorization': process.env.API_KEY
    }
  }
  )
  .then((response) => {
    // console.log(response.data);
    res.send(response.data);
  })
  .catch((error) => {
    // console.log(error);
    res.send(error);
  });
};

exports.sum = (a, b) =>{
  return a + b;
};


