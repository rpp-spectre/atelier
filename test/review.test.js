/**
 * @jest-environment jsdom
 */

 import React from 'react';
 import {fireEvent, render, cleanup, renderHook, act} from '@testing-library/react';
 import Reviews from '../client/src/review-components/Reviews.jsx';
 import ReviewSection from '../client/src/review-components/ReviewIndex.jsx';
 import ReviewForm from '../client/src/review-components/ReviewForm.jsx';
 import ReviewList from '../client/src/review-components/ReviewList.jsx';
 import Ratings from '../client/src/review-components/Ratings.jsx';
 import ProductBreakdownList from '../client/src/review-components/ProductBreakdownList.jsx';
 import HoverStars from '../client/src/review-components/HoverStars.jsx';
 import '@testing-library/jest-dom';
 import axios from 'axios';

 afterEach(() => {
  cleanup();
});

jest.mock('axios');

test('use jsdom in this test file', () => {
  const element = document.createElement('div');
  expect(element).not.toBeNull();
});

describe('Word Limits in Review', () => {

  test('only shows maximum of 60 characters in review title in initial review rendering', () => {
    let testData = {
      body: 'I love this product, it is just my aesthetic!',
      date: '2019-03-12T00:00:00.000Z',
      helpfulness: 6,
      photos: [],
      rating: 4,
      recommend: true,
      response: null,
      review_id: 123456,
      reviewer_name: 'testreviewer',
      summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit eleifend.'
    }
    const {getByText} = render(<Reviews data={testData}/>);
    let title = getByText('Lorem ipsum dolor sit amet, consectetur adipiscing elit elei...');
    expect(title).toBeInTheDocument();
  });

  test('only shows maximum of 250 characters in review body in initial review rendering', () => {
    let testData = {
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel faucibus massa. Vestibulum vitae justo quis elit aliquam elementum ut vitae est. Nulla et volutpat justo, eget hendrerit arcu. Suspendisse sed diam sit amet elit sodales facilisis non et est. Sed venenatis arcu sed dolor pulvinar mi.',
      date: '2019-03-12T00:00:00.000Z',
      helpfulness: 6,
      photos: [],
      rating: 4,
      recommend: true,
      response: null,
      review_id: 123456,
      reviewer_name: 'testreviewer',
      summary: 'It\'s so fetch!'
    }
    const {getByText} = render(<Reviews data={testData}/>);
    let text = getByText(`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel faucibus massa. Vestibulum vitae justo quis elit aliquam elementum ut vitae est. Nulla et volutpat justo, eget hendrerit arcu. Suspendisse sed diam sit amet elit sodales facilisis non`);
    expect(text).toBeInTheDocument();
  });

  test('shows "Show More" button when body word count is greater than 250 characters', () => {
    let testData = {
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel faucibus massa. Vestibulum vitae justo quis elit aliquam elementum ut vitae est. Nulla et volutpat justo, eget hendrerit arcu. Suspendisse sed diam sit amet elit sodales facilisis non et est. Sed venenatis arcu sed dolor pulvinar mi.',
      date: '2019-03-12T00:00:00.000Z',
      helpfulness: 6,
      photos: [],
      rating: 4,
      recommend: true,
      response: null,
      review_id: 123456,
      reviewer_name: 'testreviewer',
      summary: 'It\'s so fetch!'
    }
    const {getByText} = render(<Reviews data={testData}/>);
    let ShowMoreButton = getByText('Show More');
    expect(ShowMoreButton).toBeInTheDocument();
  });

  test('does not show "Show More" button when review word count is less than 250 characters', () => {
    let testData = {
      body: 'This product is great!',
      date: '2019-03-12T00:00:00.000Z',
      helpfulness: 6,
      photos: [],
      rating: 4,
      recommend: true,
      response: null,
      review_id: 123456,
      reviewer_name: 'testreviewer',
      summary: 'It\'s so fetch!'
    }
    const {queryByText} = render(<Reviews data={testData} handleClickTracking={(e)=>{console.log(e)}}/>);
    let button = queryByText('Show More');
    expect(button).not.toBeInTheDocument();
  });

  test('shows entire review when "Show More" button is clicked', () => {
    let testData = {
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel faucibus massa. Vestibulum vitae justo quis elit aliquam elementum ut vitae est. Nulla et volutpat justo, eget hendrerit arcu. Suspendisse sed diam sit amet elit sodales facilisis non et est. Sed venenatis arcu sed dolor pulvinar mi.',
      date: '2019-03-12T00:00:00.000Z',
      helpfulness: 6,
      photos: [],
      rating: 4,
      recommend: true,
      response: null,
      review_id: 123456,
      reviewer_name: 'testreviewer',
      summary: 'It\'s so fetch!'
    }
    const {getByText} = render(<Reviews data={testData}/>);
    fireEvent.click(getByText('Show More'));
    let text = getByText(`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel faucibus massa. Vestibulum vitae justo quis elit aliquam elementum ut vitae est. Nulla et volutpat justo, eget hendrerit arcu. Suspendisse sed diam sit amet elit sodales facilisis non et est. Sed venenatis arcu sed dolor pulvinar mi.`);
    expect(text).toBeInTheDocument();
  });

});

describe('Review Features', () => {
  test('shows response from seller section when there is a response', () => {
    let testData = {
      body: 'I love this product, it is just my aesthetic!',
      date: '2019-03-12T00:00:00.000Z',
      helpfulness: 6,
      photos: [],
      rating: 4,
      recommend: true,
      response: 'Thank you for your review!',
      review_id: 123456,
      reviewer_name: 'testreviewer',
      summary: 'They look good on me'
    }
    const {getByText} = render(<Reviews data={testData}/>);
    let response = getByText('Response from seller');
    expect(response).toBeInTheDocument();
  });

  test('does not show response from seller section when there is no response', () => {
    let testData = {
      body: 'I love this product, it is just my aesthetic!',
      date: '2019-03-12T00:00:00.000Z',
      helpfulness: 6,
      photos: [],
      rating: 4,
      recommend: true,
      response: null,
      review_id: 123456,
      reviewer_name: 'testreviewer',
      summary: 'They look good on me'
    }
    const {queryByText} = render(<Reviews data={testData}/>);
    let response = queryByText('Response from seller');
    expect(response).not.toBeInTheDocument();
  });

  test('shows recommendation when reviewer recommends product', () => {
    let testData = {
      body: 'I love this product, it is just my aesthetic!',
      date: '2019-03-12T00:00:00.000Z',
      helpfulness: 6,
      photos: [],
      rating: 4,
      recommend: true,
      response: 'Thank you for your review!',
      review_id: 123456,
      reviewer_name: 'testreviewer',
      summary: 'They look good on me'
    }
    const {getByText} = render(<Reviews data={testData}/>);
    let response = getByText('✓ I recommend this product');
    expect(response).toBeInTheDocument();
  });

  test('does not show recommendation when reviewer does not recommend product', () => {
    let testData = {
      body: 'The sizing is completely off',
      date: '2019-03-12T00:00:00.000Z',
      helpfulness: 6,
      photos: [],
      rating: 4,
      recommend: false,
      response: null,
      review_id: 123456,
      reviewer_name: 'testreviewer',
      summary: 'Meh'
    }
    const {queryByText} = render(<Reviews data={testData}/>);
    let response = queryByText('I recommend this product');
    expect(response).not.toBeInTheDocument();
  });

  test('increments counter by one when helpful button is clicked', () => {
    let testData = {
      body: 'I love this product, it is just my aesthetic!',
      date: '2019-03-12T00:00:00.000Z',
      helpfulness: 6,
      photos: [],
      rating: 4,
      recommend: true,
      response: null,
      review_id: 123456,
      reviewer_name: 'testreviewer',
      summary: 'They look good on me'
    }
    const {getByText} = render(<Reviews data={testData}/>);
    fireEvent.click(getByText('(6)'));
    let num = getByText('(7)');

    expect(num).toBeInTheDocument();
  });
});

describe('Review Form features', () => {
  test('contains a radio button for reviewer to recommend the product', () => {
    var data = {
      characteristics: {
        Comfort: {id: 240985, value: '2.3333333333333333'},
        Fit: {id: 240983, value: '2.9166666666666667'},
        Length: {id: 240984, value: '3.0000000000000000'},
        Quality: {id: 240986, value: '2.9166666666666667'},
      },
      product_id: "71810",
      ratings: {1: '3', 2: '1', 3: '1', 4: '3', 5: '4'},
      recommended: {false: '3', true: '9'}
    }

    const {getByLabelText} = render(<ReviewForm data={data}/>);
    let radioButtons = getByLabelText('Yes');
    expect(radioButtons).toBeInTheDocument();
  });

  test('user is able to submit reviews', () => {
    var data = {
      characteristics: {
        Comfort: {id: 240985, value: '2.3333333333333333'},
        Fit: {id: 240983, value: '2.9166666666666667'},
        Length: {id: 240984, value: '3.0000000000000000'},
        Quality: {id: 240986, value: '2.9166666666666667'},
      },
      product_id: "71810",
      ratings: {1: '3', 2: '1', 3: '1', 4: '3', 5: '4'},
      recommended: {false: '3', true: '9'}
    }
    const {getByDisplayValue} = render(<ReviewForm data={data}/>);
    let submit = getByDisplayValue('Submit Review');
    expect(submit).toBeInTheDocument();
  });

  test('contains radio buttons to rate characteristics related to product', () => {
    var data = {
      characteristics: {
        Comfort: {id: 240985, value: '2.3333333333333333'},
        Fit: {id: 240983, value: '2.9166666666666667'},
        Length: {id: 240984, value: '3.0000000000000000'},
        Quality: {id: 240986, value: '2.9166666666666667'},
      },
      product_id: "71810",
      ratings: {1: '3', 2: '1', 3: '1', 4: '3', 5: '4'},
      recommended: {false: '3', true: '9'}
    }
    const {getByText} = render(<ReviewForm data={data}/>);
    let comfort = getByText('Comfort*');
    let fit = getByText('Fit*')
    let length = getByText('Length*');
    let quality = getByText('Quality*');

    expect(comfort).toBeInTheDocument();
    expect(fit).toBeInTheDocument();
    expect(length).toBeInTheDocument();
    expect(quality).toBeInTheDocument();
  });

  test('does not contains radio buttons for characterisitics unrelated to product', () => {
    var data = {
      characteristics: {
        Comfort: {id: 240985, value: '2.3333333333333333'},
        Fit: {id: 240983, value: '2.9166666666666667'},
        Length: {id: 240984, value: '3.0000000000000000'},
        Quality: {id: 240986, value: '2.9166666666666667'},
      },
      product_id: "71810",
      ratings: {1: '3', 2: '1', 3: '1', 4: '3', 5: '4'},
      recommended: {false: '3', true: '9'}
    }
    const {queryByText} = render(<ReviewForm data={data}/>);
    let size = queryByText('Size');

    expect(size).not.toBeInTheDocument();
  });

  // test('hovering stars on review form will shade in stars', () => {
  //   const {result} = renderHook(() => HoverStars.setStarFill())
  //   expect(result.current).toEqual(1);
  // })
});

describe('Review List', () => {
  test('reviews are mapped through review list and rendered to page', () => {
    let testData = {
      body: 'I love this product, it is just my aesthetic!',
      date: '2019-03-12T00:00:00.000Z',
      helpfulness: 6,
      photos: [],
      rating: 4,
      recommend: true,
      response: null,
      review_id: 123456,
      reviewer_name: 'testreviewer',
      summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit eleifend.'
    }
    const {getAllByText} = render(<ReviewList props={[<Reviews data={testData}/>, <Reviews data={testData}/>]}/>);

    let body = getAllByText('I love this product, it is just my aesthetic!');
    expect(body[0]).toBeInTheDocument();
  });
});

describe('Rating Breakdown', () => {
  test('average rating to one decimal place is displayed', () => {
    var data = {
      characteristics: {
        Comfort: {id: 240985, value: '2.3333333333333333'},
        Fit: {id: 240983, value: '2.9166666666666667'},
        Length: {id: 240984, value: '3.0000000000000000'},
        Quality: {id: 240986, value: '2.9166666666666667'},
      },
      product_id: "71810",
      ratings: {1: '3', 2: '1', 3: '1', 4: '3', 5: '4'},
      recommended: {false: '3', true: '9'}
    }
    const {getByText} = render(<Ratings data={data}/>);

    let rating = getByText('3.3');
    expect(rating).toBeInTheDocument();
  });
});
//have sad path test here - when rating is missing a rating e.g. no 1 star reviews

describe('Product Breakdown', () => {
  test('characteristics rating relating to product are displayed', () => {
    var data = {
      characteristics: {
        Comfort: {id: 240985, value: '2.3333333333333333'},
        Fit: {id: 240983, value: '2.9166666666666667'},
        Length: {id: 240984, value: '3.0000000000000000'},
        Quality: {id: 240986, value: '2.9166666666666667'},
      },
      product_id: "71810",
      ratings: {1: '3', 2: '1', 3: '1', 4: '3', 5: '4'},
      recommended: {false: '3', true: '9'}
    }
    const {getByText} = render(<ProductBreakdownList data={data}/>);

    let comfort = getByText('Comfort');
    let fit = getByText('Fit')
    let length = getByText('Length');
    let quality = getByText('Quality');

    expect(comfort).toBeInTheDocument();
    expect(fit).toBeInTheDocument();
    expect(length).toBeInTheDocument();
    expect(quality).toBeInTheDocument();
  });

  test('characteristics rating relating to product are displayed', () => {
    var data = {
      characteristics: {
        Comfort: {id: 240985, value: '2.3333333333333333'},
        Fit: {id: 240983, value: '2.9166666666666667'},
        Length: {id: 240984, value: '3.0000000000000000'},
        Quality: {id: 240986, value: '2.9166666666666667'},
      },
      product_id: "71810",
      ratings: {1: '3', 2: '1', 3: '1', 4: '3', 5: '4'},
      recommended: {false: '3', true: '9'}
    }
    const {queryByText} = render(<ProductBreakdownList data={data}/>);

    let size = queryByText('Size');

    expect(size).not.toBeInTheDocument();
  });
});

// describe('Reviews', () => {
//   const renderComponent = () => (render(<ReviewSection />));
//   test('only shows maximum two reviews in initial page rendering', async () => {
//     const {getByText} = renderComponent();
//     axios.get.mockResolvedValue({
//       data: [
//         {
//           body: 'I love this product, it is just my aesthetic!',
//           date: '2019-03-12T00:00:00.000Z',
//           helpfulness: 6,
//           photos: [],
//           rating: 4,
//           recommend: true,
//           response: null,
//           review_id: 123456,
//           reviewer_name: 'testreviewer',
//           summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit eleifend.'
//         },
//         {
//           body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel faucibus massa. Vestibulum vitae justo quis elit aliquam elementum ut vitae est. Nulla et volutpat justo, eget hendrerit arcu. Suspendisse sed diam sit amet elit sodales facilisis non et est. Sed venenatis arcu sed dolor pulvinar mi.',
//           date: '2019-03-12T00:00:00.000Z',
//           helpfulness: 6,
//           photos: [],
//           rating: 4,
//           recommend: true,
//           response: null,
//           review_id: 123456,
//           reviewer_name: 'testreviewer',
//           summary: 'It\'s so fetch!'
//         }
//       ]
//     });

//       let num = getByText('(1)');
//       expect(num).toBeInTheDocument();

//   });
// });

test('displays message that there are no reviews if there are no reviews', () => {
  // const {getByText, getByTestId} = render(<ReviewSection />);
  // let num = getByText('(1)');

  // expect(num).toBeInTheDocument();
});
/*tests to write:
- only 2 reviews showed to start
- if 2 or less reviews, more reviews button not rendered
- after all reviews shown, button not rendered
*/