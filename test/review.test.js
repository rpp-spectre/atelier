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