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
  axios.put(apiCH, `answer_id=${aid}`, {
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

exports.areport = (req, res) =>{
  let aid = req.params.aid;
  // console.log('aid', aid);
  let apiAR = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/answers/${aid}/report`;
  axios.put(apiAR, `answer_id=${aid}`, {
  headers: {
    'Authorization': process.env.API_KEY
  }
  })
  .then((result)=>{
    // console.log(result);
    res.send('reported');
  })
  .catch((error) =>{
    res.send(error);
  });
};

exports.addQuestion = (req, res) =>{
  let apiAddQ = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions/';
  console.log(req);
  let body = req.query.body;
  let name = req.query.name;
  let email = req.query.email;
  let productId = req.query.product_id;
  axios.post(apiAddQ, {
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
    console.log('in controller');
    console.log('controller data',response.config.data);
    res.send(response.data);
  })
  .catch((error) => {
    // console.log(response.config.data);
    console.log(error);
    res.send(error);
  });
};

exports.addAnswer = (req, res) =>{
  let qid = req.params.qid;
  console.log("qid", qid);
  let apiAddA = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions/'+qid+'/answers';
  // let body = req.query.body;
  // let name = req.query.name;
  // let email = req.query.email;
  // let photos = req.query.photos;
  let body = req.body.body;
  let name = req.body.name;
  let email = req.body.email;
  let photos = req.body.photos;
  axios.post(apiAddA, {
    "body": body,
    "name": name,
    "email": email,
    "photos": Array.from(photos)
    },
    {
    headers: {
    'Authorization': process.env.API_KEY
    }
  }
  )
  .then((response) => {
    console.log('in controller');
    console.log('controller data',response.config.data);
    res.send(response.data);
  })
  .catch((error) => {
    // console.log(response.config.data);
    console.log(error);
    res.send(error);
  });
};

exports.log = (req, res) =>{
  let apiLog = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/interactions';
  let element = req.body.element;
  let widget = req.body.widget;
  let time = req.body.time;
  axios.post(apiLog, {
    "element": element,
    "widget": widget,
    "time": time
    },
    {
    headers: {
    'Authorization': process.env.API_KEY
    }
  }
  )
  .then((response) => {
    // console.log('in controller');
    // console.log('controller data',response.config.data);
    res.send(response.data);
  })
  .catch((error) => {
    // console.log(response.config.data);
    console.log(error);
    res.send(error);
  });
};

exports.sum = (a, b) =>{
  return a + b;
};


