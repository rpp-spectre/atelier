import {cleanup,fireEvent,render,screen,configure} from '@testing-library/react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Qsection from '../../client/src/components-questions/qindex.jsx';
import '@testing-library/jest-dom';
import axios from "axios";

// afterEach(cleanup); // Resets the DOM after each test suite
afterEach(() => {
  cleanup();
  jest.mock('axios');
});

test('use jsdom in this test file', () => {
  const element = document.createElement('div');
  expect(element).not.toBeNull();
});

describe("Question and Answer Component" ,() => {

  // test('componenent loaded', () =>{
  //   // jest.mock('axios');
  //   let pid= 71810;
  //   let handleClickTracking = jest.fn((e) => {e});
	//   render(<Qsection pid={pid} handleClickTracking={handleClickTracking} />);
	//   const qa = screen.getByTestId("Qindex");
  //   expect(qa).toBeInTheDocument();
  // });

  // test('componenent text loaded', () =>{
  //   // jest.mock('axios');
  //   let pid= 71810;
  //   let handleClickTracking = jest.fn((e) => {e});
	//   render(<Qsection pid={pid} handleClickTracking={handleClickTracking} />);
	//   const qa = screen.getByTestId("Qindex");
  //   expect(qa).toHaveTextContent("QUESTIONS");
  // });

  //write a test for sorting
  //write a test for axios
  //write a test for options rendering

});





