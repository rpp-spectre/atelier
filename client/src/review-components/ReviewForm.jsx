import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import Stars from './Stars.jsx';

function ReviewForm(props) {
  let charDetails = {
    Size: ['A size too small', '½ a size too small', 'Perfect', '½ a size too big', 'A size too wide'],
    Width: ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'],
    Comfort: ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'],
    Quality: ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'],
    Length: ['Runs short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'],
    Fit: ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs loose']
  }

  const [formData, setFormData] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.value);
  }

  let radioForm = Object.entries(charDetails).map((characteristic, index) => {
    return <div key={index} className='review-form'>
      <label>{characteristic[0]}*</label><br></br>
      <div className='review-char'>
      {characteristic[1].map((description, index) => {
        return <input key={index} type='radio' id={index + 1} name={characteristic[0]} value={index + 1}></input>
      })}
      </div>
      <div className='review-char'>
      {characteristic[1].map((description, index) => {
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
      <h5>About the [Product Name]</h5>
      <div className='review-form'>
        <label>
          Overall Rating*
          <Stars rating='0'/>
        </label>
      </div>
      <div className='review-form'>
        <label>I recommend this product*</label><br></br>
        <input type='radio' id='yes' name='recommend' value='yes'/>
        <label htmlFor='yes'>Yes</label><br></br>
        <input type='radio' id='no' name='recommend' value='no'/>
        <label htmlFor='no'>No</label><br></br>
      </div>
      {radioForm}
      <div className='review-form'>
        <label>
        Review Summary:* <br></br>
        <textarea placeholder='Example: Best purchase ever!' rows='1' cols='60' maxLength='60'/>
        </label>
      </div>
      <div className='review-form'>
        <label>
        Review Body:* <br></br>
        <textarea placeholder='Why did you like the product or not?' rows='5' cols='60' maxLength='1000' minLength='50'/>
        <div style={{fontSize: '8pt'}}>Minimum required characters left: [##]</div>
        </label>
      </div>
      <div className='review-form'>
        <label>
          Upload an image:
          <input type='file' accept='image/jpeg, image/png' multiple/>
        </label>
      </div>
      <div className='review-form'>
      <label>
          What is your nickname?*<br></br>
          <input type='text' placeholder='jackson11!' cols='60' maxLength='60'/>
        </label>
      </div>
      <div className='review-form'>
      <label>
          What is your email?*<br></br>
          <input type='text' placeholder='Example: jackson11@email.com'maxLength='60'/>
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