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
  jest.mock('axios');
});

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
    let handleClickTracking = jest.fn((e) => {e});
    const {queryByText} = render(<Reviews data={testData} handleClickTracking={handleClickTracking}/>);
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
    let handleClickTracking = jest.fn((e) => {e});
    const {getByText} = render(<Reviews data={testData} handleClickTracking={handleClickTracking}/>);
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
    let mockFunction = jest.fn((e) => {e});
    const {getByText} = render(<Reviews data={testData} handleClickTracking={mockFunction}/>);
    fireEvent.click(getByText('(6)'));
    let num = getByText('(7)');

    expect(num).toBeInTheDocument();
  });

  test('image modal is displayed when image thumbnail in review is clicked', () => {
    let testData = {
      body: 'I love this product, it is just my aesthetic!',
      date: '2019-03-12T00:00:00.000Z',
      helpfulness: 6,
      photos: ['https://images.unsplash.com/photo-1560570803-7474c0f9af99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80'],
      rating: 4,
      recommend: true,
      response: null,
      review_id: 123456,
      reviewer_name: 'testreviewer',
      summary: 'They look good on me'
    }
    let mockFunction = jest.fn((e) => {e});
    const {getByAltText, getByText} = render(<Reviews data={testData} handleClickTracking={mockFunction}/>);
    fireEvent.click(getByAltText('outfit image'));
    let button = getByText('Close');

    expect(button).toBeInTheDocument();
  });
});

describe('Review Form features', () => {
  test('displays form modal when add review button is clicked', () => {
    let mockFunction = jest.fn((e) => {e});
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
    const {getByText} = render(<ReviewSection
      productName='name'
      reviewMeta={data}
      totalReviewsArray={[]}
      reviewCount={0} onSort={mockFunction}
      handleFilter={mockFunction}
      filterApplied='false'
      removeFilter={mockFunction}
      ratingFilter={[]}
      handleClickTracking={mockFunction}/>);

    fireEvent.click(getByText('Add A Review +'));

    let text = getByText('Write Your Review:');

    expect(text).toBeInTheDocument();
  });

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

  test('hovering stars on review form will shade in stars', () => {
    let mockFunction = jest.fn((e) => {e});
    const {getAllByText, getByText} = render(<HoverStars selectRating={mockFunction}/>);
    fireEvent.click(getAllByText('☆')[0]);
    let test = getAllByText('☆')[0];
    expect(test).toBeInTheDocument();


  })
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

  test('displays message that there are no reviews if there are no reviews', () => {
    let mockFunction = jest.fn((e) => {e});
    const {getByText} = render(<ReviewSection
      productName='name'
      reviewMeta={null}
      totalReviewsArray={[]}
      reviewCount={0} onSort={mockFunction}
      handleFilter={mockFunction}
      filterApplied='false'
      removeFilter={mockFunction}
      ratingFilter={[]}
      handleClickTracking={mockFunction}/>);
    let text = getByText('There are no reviews yet.');

    expect(text).toBeInTheDocument();
  });

  test('only shows maximum two reviews in initial page rendering', () => {
    let mockFunction = jest.fn((e) => {e});
    let data = [
      {
        body: 'Test 1',
        date: '2019-03-12T00:00:00.000Z',
        helpfulness: 6,
        photos: [],
        rating: 4,
        recommend: true,
        response: null,
        review_id: 123456,
        reviewer_name: 'testreviewer1',
        summary: 'Testing'
      },
      {
        body: 'Test 2',
        date: '2019-03-12T00:00:00.000Z',
        helpfulness: 6,
        photos: [],
        rating: 4,
        recommend: true,
        response: null,
        review_id: 123456,
        reviewer_name: 'testreviewer2',
        summary: 'Testing'
      },
      {
        body: 'Test 3',
        date: '2019-03-12T00:00:00.000Z',
        helpfulness: 6,
        photos: [],
        rating: 4,
        recommend: true,
        response: null,
        review_id: 123456,
        reviewer_name: 'testreviewer3',
        summary: 'Testing'
      }
    ]
    let resultArray = [];
    data.forEach((element) => {
      resultArray.push(<Reviews data={element} handleClickTracking={mockFunction}/>);
    });

    const {getByText, queryByText} = render(<ReviewSection
      productName='name'
      reviewMeta={null}
      totalReviewsArray={resultArray}
      reviewCount={0} onSort={mockFunction}
      handleFilter={mockFunction}
      filterApplied='false'
      removeFilter={mockFunction}
      ratingFilter={[]}
      handleClickTracking={mockFunction}/>);
    let testOne = getByText('Test 1');
    let testTwo = getByText('Test 2');
    let testThree = queryByText('Test 3');

    expect(testOne).toBeInTheDocument();
    expect(testTwo).toBeInTheDocument();
    expect(testThree).not.toBeInTheDocument();
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
      recommended: {false: '3', true: '9'},
    }
    let ratingFilter = [];
    const {getByText} = render(<Ratings data={data} ratingFilter={ratingFilter}/>);

    let rating = getByText('3.3');
    expect(rating).toBeInTheDocument();
  });

  test('average rating is still calculated if rating data is missing values', () => {
    var data = {
      characteristics: {
        Comfort: {id: 240985, value: '2.3333333333333333'},
        Fit: {id: 240983, value: '2.9166666666666667'},
        Length: {id: 240984, value: '3.0000000000000000'},
        Quality: {id: 240986, value: '2.9166666666666667'},
      },
      product_id: "71810",
      ratings: {2: '1', 3: '1', 4: '3', 5: '4'},
      recommended: {false: '3', true: '9'},
    }
    let ratingFilter = [];
    const {getByText} = render(<Ratings data={data} ratingFilter={ratingFilter}/>);

    let rating = getByText('4.1');
    expect(rating).toBeInTheDocument();
  });

  test('percent recommendation is calculated and rounded to nearest digit', () => {
    var data = {
      characteristics: {
        Comfort: {id: 240985, value: '2.3333333333333333'},
        Fit: {id: 240983, value: '2.9166666666666667'},
        Length: {id: 240984, value: '3.0000000000000000'},
        Quality: {id: 240986, value: '2.9166666666666667'},
      },
      product_id: "71810",
      ratings: {2: '1', 3: '1', 4: '3', 5: '4'},
      recommended: {false: '3', true: '9'},
    }
    let ratingFilter = [];
    const {getByText} = render(<Ratings data={data} ratingFilter={ratingFilter}/>);

    let rating = getByText('75% of reviews recommend this product');
    expect(rating).toBeInTheDocument();
  });

  test('percent recommendation is still calculated if recommendation data is missing false values', () => {
    var data = {
      characteristics: {
        Comfort: {id: 240985, value: '2.3333333333333333'},
        Fit: {id: 240983, value: '2.9166666666666667'},
        Length: {id: 240984, value: '3.0000000000000000'},
        Quality: {id: 240986, value: '2.9166666666666667'},
      },
      product_id: "71810",
      ratings: {2: '1', 3: '1', 4: '3', 5: '4'},
      recommended: {true: '9'},
    }
    let ratingFilter = [];
    const {getByText} = render(<Ratings data={data} ratingFilter={ratingFilter}/>);

    let rating = getByText('100% of reviews recommend this product');
    expect(rating).toBeInTheDocument();
  });

  test('percent recommendation is still calculated if recommendation data is missing true values', () => {
    var data = {
      characteristics: {
        Comfort: {id: 240985, value: '2.3333333333333333'},
        Fit: {id: 240983, value: '2.9166666666666667'},
        Length: {id: 240984, value: '3.0000000000000000'},
        Quality: {id: 240986, value: '2.9166666666666667'},
      },
      product_id: "71810",
      ratings: {2: '1', 3: '1', 4: '3', 5: '4'},
      recommended: {false: '9'},
    }
    let ratingFilter = [];
    const {getByText} = render(<Ratings data={data} ratingFilter={ratingFilter}/>);

    let rating = getByText('0% of reviews recommend this product');
    expect(rating).toBeInTheDocument();
  });

  test('rating can be clicked to apply filter to reviews', () => {
    let mockFunction = jest.fn((e) => {e});
    var data = {
      characteristics: {
        Comfort: {id: 240985, value: '2.3333333333333333'},
        Fit: {id: 240983, value: '2.9166666666666667'},
        Length: {id: 240984, value: '3.0000000000000000'},
        Quality: {id: 240986, value: '2.9166666666666667'},
      },
      product_id: "71810",
      ratings: {2: '1', 3: '1', 4: '3', 5: '4'},
      recommended: {true: '9'},
    }
    let ratingFilter = [];
    const {getByText} = render(<Ratings
      data={data}
      ratingFilter={ratingFilter}
      handleFilter={mockFunction}
      filterApplied='false'
      removeFilter={mockFunction}
      handleClickTracking={mockFunction}/>);
    fireEvent.click(getByText('5 stars'));
    let rating = getByText('5 stars');
    expect(rating).toBeInTheDocument();
  });

  test('filters and remove filter option are shown when rating filters are applied', () => {
    let mockFunction = jest.fn((e) => {e});
    var data = {
      characteristics: {
        Comfort: {id: 240985, value: '2.3333333333333333'},
        Fit: {id: 240983, value: '2.9166666666666667'},
        Length: {id: 240984, value: '3.0000000000000000'},
        Quality: {id: 240986, value: '2.9166666666666667'},
      },
      product_id: "71810",
      ratings: {2: '1', 3: '1', 4: '3', 5: '4'},
      recommended: {true: '9'},
    }
    let ratingFilter = ['5'];
    const {getByText} = render(<Ratings
      data={data}
      ratingFilter={ratingFilter}
      handleFilter={mockFunction}
      filterApplied='true'
      removeFilter={mockFunction}
      handleClickTracking={mockFunction}/>);
    let filter = getByText('Rating filters applied: 5-star');
    expect(filter).toBeInTheDocument();
  });

  test('filters and remove filter option are not shown when rating filters are not applied', () => {
    let mockFunction = jest.fn((e) => {e});
    var data = {
      characteristics: {
        Comfort: {id: 240985, value: '2.3333333333333333'},
        Fit: {id: 240983, value: '2.9166666666666667'},
        Length: {id: 240984, value: '3.0000000000000000'},
        Quality: {id: 240986, value: '2.9166666666666667'},
      },
      product_id: "71810",
      ratings: {2: '1', 3: '1', 4: '3', 5: '4'},
      recommended: {true: '9'},
    }
    let ratingFilter = [];
    const {queryByText} = render(<Ratings
      data={data}
      ratingFilter={ratingFilter}
      handleFilter={mockFunction}
      filterApplied='false'
      removeFilter={mockFunction}
      handleClickTracking={mockFunction}/>);
    let filter = queryByText('5-star');
    expect(filter).not.toBeInTheDocument();
  });
});

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

  test('characteristics rating not relating to product are not displayed', () => {
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