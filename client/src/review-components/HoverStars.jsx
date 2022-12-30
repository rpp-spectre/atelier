import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';

//to use in any component, pass the rating into props as rating='<Float>'

function HoverStars(props) {
  const [starRating, setStarRating] = useState(0);
  const [starFill, setStarFill] = useState(0);

  function handleClick(e) {
    props.selectRating(e);
    setStarRating(e.target.value);
  }

  return (
    <div className='hoverStar-rating'>
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
          type='button'
          key={index}
          name='rating'
          className={index <= (starRating || starFill) ? 'on' : 'off'}
          id='starButton'
          value={index}
          onClick={handleClick}
          onMouseEnter={() => setStarFill(index)}
          onMouseLeave={() => setStarFill(starRating)}>
            <span className='hoverStar'>{'\u2606'}</span>
          </button>
        );
      })}
    </div>
  )
};

export default HoverStars;