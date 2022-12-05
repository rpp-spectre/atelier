/**
 * @jest-environment jsdom
 */

 import React from 'react';
 import {fireEvent, render} from '@testing-library/react';
 import Reviews from '../client/src/review-components/Reviews.jsx';
 import '@testing-library/jest-dom';

 test('use jsdom in this test file', () => {
  const element = document.createElement('div');
  expect(element).not.toBeNull();
});

test('increments counter by one when helpful button is clicked', () => {
  const {getByText, getByTestId} = render(<Reviews />);
  fireEvent.click(getByTestId('counter'));
  let num = getByText('(1)');

  expect(num).toBeInTheDocument();
});

/*tests to write:
- only 2 reviews showed to start
- if 2 or less reviews, more reviews button not rendered
- after all reviews shown, button not rendered

- when text is less than 250 characters, does not show see more button
- when text is more than 250 characters, shows see more button
- when see more button is clicked, all text appears and see more button is gone
*/