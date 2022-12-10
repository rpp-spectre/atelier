import React from 'react';
import ReactDOM from 'react-dom/client';
import Stars from './Stars.jsx';

function ReviewForm(props) {
  return (
    <div className ='modal'>
    <div className='modal-content'>
      <div className='modal-body'>
      <form>
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
      <div className='review-form'>
        <label>Quality*</label><br></br>
        <div className='review-char'>
        <input type='radio' id='1' name='quality' value='1'/>
        <input type='radio' id='2' name='quality' value='2'/>
        <input type='radio' id='3' name='quality' value='3'/>
        <input type='radio' id='4' name='quality' value='4'/>
        <input type='radio' id='5' name='quality' value='5'/>
        </div>
        <div className='review-char'>
        <label htmlFor='1'>Poor</label>
        <label htmlFor='2'>Below Average</label>
        <label htmlFor='3'>What I expected</label>
        <label htmlFor='4'>Pretty Great</label>
        <label htmlFor='5'>Perfect</label>
        </div>
      </div>
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