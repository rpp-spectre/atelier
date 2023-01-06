import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import HoverStars from './HoverStars.jsx';
import axios from 'axios';

function ReviewForm(props) {
  const [charCount, setCharCount] = useState(50);
  let charDetails = {
    Size: ['A size too small', '½ a size too small', 'Perfect', '½ a size too big', 'A size too wide'],
    Width: ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'],
    Comfort: ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'],
    Quality: ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'],
    Length: ['Runs short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'],
    Fit: ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs loose']
  }

  let charArray = Object.keys(props.data.characteristics).map((element, index) => {
    return [element, props.data.characteristics[element].id, charDetails[element]]
  })

  const [selectedImages, setSelectedImages] = useState([]);

  let imagePreview = null;
  if (selectedImages.length > 0) {
    imagePreview = selectedImages.map((element, index) => {
      return <img key={index} src={URL.createObjectURL(element)} height='100' width='100'/>
    });
  }

  const [formData, setFormData] = useState({
    product_id: props.data.product_id,
    rating: 0,
    summary: '',
    body: '',
    recommend: false,
    name: '',
    email: '',
    photos: [],
    characteristics: {}
  });

  function handleSubmit(e) {
    e.preventDefault();
    let imagePromiseArray = [];
    if (selectedImages.length > 0) {
      selectedImages.forEach((image) => {
        let body = new FormData();
        body.set('key', process.env.REACT_APP_IMG_API_KEY);
        body.append('image', image);
        imagePromiseArray.push(
          axios({
            method: 'post',
            url: 'https://api.imgbb.com/1/upload',
            data: body
          })
          .then((result) => {
            console.log(result);
            return result.data.data.url;
          })
          .catch((err) => {
            console.log(err);
          })
        )
      });
    }
    Promise.all(imagePromiseArray)
    .then((imageURLs) => {
      console.log(imageURLs);
      let data = formData;
      data.photos = imageURLs
      return data;
    })
    .then((body) => {
      axios({
        method: 'post',
        url: '/reviews',
        data: body,
      })
      .then((result) => {
        console.log(result);
        if (result.data === 'Created') {
          alert('Thank you for your review!');
          props.onClose();
        } else {
          alert('Something went wrong. Please try again later');
        }
      })
      .catch((err) => {
        console.log(err);
      })
    });
  }

  function handleUpload(e) {
    if (selectedImages.length < 5) {
      setSelectedImages([...selectedImages, ...Object.values(e.target.files)].slice(0, 5));
    } else {
      alert('You may only upload a maximum of 5 photos');
    }
  }

  function handleChange(e) {
    const value = e.target.value;

    if (e.target.className === 'characteristics') {
      setFormData({...formData,
        characteristics: {...formData.characteristics,
        [e.target.name]: Number(value)}
      })
    } else {
      if (e.target.className === 'body') {
        if (50 - e.target.value.length >= 0) {
          setCharCount(50 - e.target.value.length)
        }
      }
      setFormData({
        ...formData,
        [e.target.name]: value
      });
    }
  }

  let radioForm = charArray.map((characteristic, index) => {
    return <div key={index} className='review-form'>
      <label>{characteristic[0]}*</label><br></br>
      <div className='review-char'>
      {characteristic[2].map((description, index) => {
        return <input key={index} className='characteristics' onChange={handleChange} type='radio' id={index + 1} name={characteristic[1]} value={index + 1}></input>
      })}
      </div>
      <div className='review-char'>
      {characteristic[2].map((description, index) => {
        return <label key={index} htmlFor={index + 1}>{description}</label>
      })}
      </div>
    </div>
  })

  return (
    <div className ='modal'>
    <div className='modal-content'>
      <div className='modal-body, form-view'>
      <form className='review-form' onSubmit={handleSubmit}>
      <label>
      Write Your Review:
      </label>
      <h5>About the {props.productName}</h5>
      <div className='review-form'>
        <label>
          Overall Rating*
          <HoverStars selectRating={handleChange}/>
        </label>
      </div>
      <div className='review-form'>
        <label>I recommend this product*</label><br></br>
        <input onChange={handleChange} type='radio' id='yes' name='recommend' defaultValue={true}/>
        <label htmlFor='yes'>Yes</label><br></br>
        <input onChange={handleChange} type='radio' id='no' name='recommend' defaultValue={false}/>
        <label htmlFor='no'>No</label><br></br>
      </div>
      {radioForm}
      <div className='review-form'>
        <label>
        Review Summary:* <br></br>
        <textarea onChange={handleChange} placeholder='Example: Best purchase ever!' rows='1' cols='60' maxLength='60' name='summary' defaultValue={formData.summary}/>
        </label>
      </div>
      <div className='review-form'>
        <label>
        Review Body:* <br></br>
        <textarea className='body' onChange={handleChange} placeholder='Why did you like the product or not?' rows='5' cols='60' maxLength='1000' minLength='50' name='body' defaultValue={formData.body}/>
        <div style={{fontSize: '8pt'}}>Minimum required characters left: {charCount}</div>
        </label>
      </div>
      <div className='review-form'>
        <label>
          Upload an image:
          <input type='file' accept='image/jpeg, image/png' multiple onChange={handleUpload}/>
          {imagePreview}
        </label>
      </div>
      <div className='review-form'>
      <label>
          What is your nickname?*<br></br>
          <input onChange={handleChange} type='text' placeholder='jackson11!' cols='60' maxLength='60' name='name' defaultValue={formData.nickname}/>
        </label>
      </div>
      <div className='review-form'>
      <label>
          What is your email?*<br></br>
          <input onChange={handleChange} type='text' placeholder='Example: jackson11@email.com'maxLength='60' name='email' defaultValue={formData.email}/>
          <div style={{fontSize: '8pt'}}>For authentication reasons, you will not be emailed</div>
        </label>
      </div>
      <div className='review-form'>
        <input type='submit' value='Submit Review' />
      </div>
    </form>
      </div>
      <button onClick={props.onClose}>Close</button>
    </div>
  </div>
  );
  }

export default ReviewForm;