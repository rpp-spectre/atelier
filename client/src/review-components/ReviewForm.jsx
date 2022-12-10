import React from 'react';
import ReactDOM from 'react-dom/client';

function ReviewForm(props) {
  return (
    <div className ='modal'>
    <div className='modal-content'>
      <div className='modal-body'>
      <form>
      <label>
      Submit a review:
      <div>
        <textarea placeholder='Write your review' rows='5' cols='50' maxLength='1000' minLength='50'/>
      </div>
      </label>
      <div>
        <label>
          Upload an image:
          <input type='file' accept='image/jpeg, image/png' multiple/>
        </label>
      </div>
      <div>
        <input type='checkbox' />
        <label>I recommend this product</label>
      </div>
      <div>
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