import React, {useState, useEffect} from 'react';
import ReacDom from 'react-dom/client';
import Aphotos from './photos/aphotos.jsx';
import Ahcounter from './counter/ahcounter.jsx';

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
    <div>
      A: {answer.body}
      <br />
      {/* by {answer.answer_name} {answer.date} | Helpful ({acounter}) Report */}
      by {answer.answer_name} {date} | <Ahcounter acounter={acounter} /> Report
      <br />
       {photo()}
       <br />
    </div>

  );
};

export default Answer;