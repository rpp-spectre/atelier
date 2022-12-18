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

  var answerer = () =>{
     return ((answer.answerer_name === "Seller") ? <b>Seller</b> : answer.answerer_name);
  };

  let pdate = new Date(answer.date);
  let date = pdate.toLocaleDateString("en-US", options);

  return (
    <div role="document">
      A: {answer.body}
      <br />
      {/* by {answer.answer_name} {answer.date} | Helpful ({acounter}) Report */}
      by {answerer()} {date} | <Ahcounter acounter={acounter} aid={answer.answer_id} /> <Reporta aid={answer.answer_id} />
      <br />
       {photo()}
       <br />
    </div>

  );
};

export default Answer;