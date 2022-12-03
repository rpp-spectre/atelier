import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import { screen, configure } from '@testing-library/react';
import Qindex from '../client/src/components-questions/qindex.jsx';
import '@testing-library/jest-dom';

// afterEach(() => {
// 	cleanup(); // Resets the DOM after each test suite
// })

const call = require('../server/controllers/questions.js');

test('adds 1 + 2 to equal 3', () => {
  expect(call.sum(1, 2)).toBe(3);
});

test('use jsdom in this test file', () => {
  const element = document.createElement('div');
  expect(element).not.toBeNull();
});


