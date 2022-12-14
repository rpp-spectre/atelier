import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import ImageModal from './imageModal.jsx';
import Stars from './Stars.jsx';
import axios from 'axios';

function Reviews(props) {
  const [paragraphLimit, setLimit] = useState(250);
  const [showSeeMore, setShowSeeMore] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setImage] = useState('');
  const [clicked, setClicked] = useState('false');

  function handleHelpfulClick(e) {
    if (e.target.className === 'false helpful reviews') {
      props.data.helpfulness++;
      setClicked('true');
      axios({
        method: 'post',
        url: '/reviews/:review_id/helpful',
        data: {reviewId: props.data.review_id},
      })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      })
    }
  }

  let paragraphText = props.data.body;

  let shownText = paragraphText.substring(0, paragraphLimit);
  let seeMoreButton = <span>...<button className='reviews' onClick={(e) => {setLimit(paragraphText.length); setShowSeeMore(false); props.handleClickTracking(e);}}>Show More</button></span>;

  if (!showSeeMore || paragraphText.length <= 250) {
    seeMoreButton = null;
  };

  let reviewTitle = props.data.summary;
  let reviewTitleElement = <h3>{reviewTitle}</h3>;
  if (reviewTitle.length > 60) {
    reviewTitleElement = <div>
        <h3>{reviewTitle.substring(0, 60)}...</h3>
        <p>...{reviewTitle.substring(61, reviewTitle.length)}</p>
      </div>
  }

  let images = props.data.photos.map((element, index) => {
    return <img
      key={index}
      onClick={(e) => {setShowModal(true); setImage(element.url); props.handleClickTracking(e);}}
      className='thumbnail reviews'
      width='100px'
      height='100px'
      src={element.url}
      alt='outfit image'/>
  })

  let modal = <ImageModal onClose={() => {setShowModal(false)}} img={modalImage}/>;
  if (!showModal) {
    modal = null;
  }

  let isRecommended = <h4>{'\u2713'} I recommend this product</h4>;
  if (props.data.recommend === false) {
    isRecommended = null;
  }

  let sellerResponse = <aside><h4>Response from seller</h4><p>{props.data.response}</p></aside>
  if (props.data.response === null) {
    sellerResponse = null;
  }

  return <div>
    <div><Stars rating={props.data.rating}/></div>
    <span className='username'>{props.data.reviewer_name} {(new Date(props.data.date)).toDateString().substring(4)}</span>
    {reviewTitleElement}
    <p>{shownText}{seeMoreButton}</p>
    {isRecommended}
    {images}
    {modal}
    {sellerResponse}
    <div className='helpfulness'>
      <label>
        Helpful?
        <button className={clicked + ' helpful reviews'} onClick={(e) => {handleHelpfulClick(e); props.handleClickTracking(e);}}>Yes</button>
        <span>({props.data.helpfulness})</span>
      </label>
    </div>
    <hr />
  </div>
}

export default Reviews;