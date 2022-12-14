import React, {useState, useEffect} from 'react';
import ReacDom from 'react-dom/client';
import Aphotos from './photos/aphotos.jsx';
import Ahcounter from './counter/ahcounter.jsx';
import Reporta from './report/reporta.jsx';

const Answer = ({answer})=>{
  // const [acounter, setAcounter] = useState(answer['helpfulness']);
  const acounter = answer['helpfulness'];
  var photo = ()=>{
    if(answer.photos.length ===0) {

      return null;
    } else {
      return <Aphotos photos={answer.photos} />;
    }
  };
  let options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
   };

  let pdate = new Date(answer.date);
  let date = pdate.toLocaleDateString("en-US", options);

  return (
    <div role="answer">
      A: {answer.body}
      <br />
      {/* by {answer.answer_name} {answer.date} | Helpful ({acounter}) Report */}
      by {answer.answerer_name} {date} | <Ahcounter acounter={acounter} aid={answer.answer_id} /> <Reporta aid={answer.answer_id} />
      <br />
       {photo()}
       <br />
    </div>

  );
};

export default Answer;