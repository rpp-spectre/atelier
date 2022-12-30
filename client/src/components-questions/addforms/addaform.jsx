import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import PortalReactDOM from 'react-dom';
import Simage from './simage.jsx';
import axios from 'axios';
// import { CSSTransition } from 'react-transition-group';


const Addaform = ({pid, qid, qbody, onClose, show, product})=>{
  if(!show) {
    return null;
  }

  const [selectedImages, setSelectedImages] = useState([]);
  const [warning, setWarning] = useState(false);
  const [body, setBody] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [photos, setPhotos] = useState([]);

  const showWarning = () =>{
    if(warning) {
      return "You can only upload up to 5 images";
    }
  };

  var uploadImage= (img) => {
    let body = new FormData();
    body.set('key', process.env.IMGAPI_KEY);
    body.append('image', img);

    return axios({
      method: 'post',
      url: 'https://api.imgbb.com/1/upload',
      data: body
    });
  };

  var handleSubmit=()=>{
    console.log("submitted");
    axios.post(`http://localhost:3000/questions/${qid}/answers?body=${body}&name=${name}&email=${email}&photos=${photos}`)
    .then((result) =>{
     console.log('in forms');
      console.log(result);
      })
    .catch(err=>{
      throw err;
      });
  };


  return (

    <div className='modal'>
      <div className='modal-content'>
        <div className='modal-header'>
          <h4 className='modal-title'>
            Submit Your Answer
          </h4>
          [{product}]: [{qbody}]
        </div>
        <div className='modal-body'>
           <form onSubmit={(e)=>{
            console.log("in form ");
            handleSubmit();
            }}>
             <label>
               Your Answer:
               <textarea
               cols="50"
               rows="20"
               maxLength="1000"
               name="body"
               placeholder="..."
               required
               autoComplete="off"
               value ={body}
               onChange = {(e)=>{ setBody(e.target.value); }}
              />
             </label>
             <br />
             <label>
              What is Your Nickname:
              <input
              type="text"
              name="name"
              maxLength="60"
              placeholder="Example: jack543!"
              required
              autoComplete="off"
              value ={name}
              onChange = {(e)=>{ setName(e.target.value); }}
              />
              <br />
              <span className ="notetext">For privacy reasons, do not use your full name or email address</span>
             </label>
             <br />
             <label>
              Your Email:
              <input
              type="email"
              name="email"
              maxLength="60"
              placeholder="Example: jack@email.com"
              required
              autoComplete="off"
              value ={email}
              onChange = {(e)=>{ setEmail(e.target.value); }}
              />
             <br />
              <span className ="notetext">For authentication reasons, you will not be emailed</span>
             </label>
             <br />
             <label>
             Upload your photos:
             <br />
             <span className="notetext">{showWarning()}</span>

              {/* {(selectedImages.length >0) && (

                selectedImages.map((image) => {
                  return (<Simage image={image} />);
                });
            )} */}
            <div>
            {(selectedImages.length>0) && (

             selectedImages.map((image, i) => {
              return (<Simage image={image} key={i} />)
            })

            )}
             </div>
          <br />

      <br />
      <input
        type="file"
        name="photos"
        onChange={(event) => {
          console.log(event.target.files[0]);
          if(selectedImages.length <5)  {
            setSelectedImages([...selectedImages,event.target.files[0]]);
          } else {
            setWarning(true);
          }

        }}
      />
             </label>
             <div className='model-footer'>
          <button onClick={onClose} className='button'>Cancel</button>
          <button type="submit">Submit</button>
        </div>
           </form>
        </div>


      </div>
    </div>


  );
};

export default Addaform;