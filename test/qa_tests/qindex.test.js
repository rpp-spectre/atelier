import {cleanup,fireEvent,render,screen,configure} from '@testing-library/react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Qsection from '../../client/src/components-questions/qindex.jsx';
import '@testing-library/jest-dom';

afterEach(cleanup); // Resets the DOM after each test suite

test('use jsdom in this test file', () => {
  const element = document.createElement('div');
  expect(element).not.toBeNull();
});

describe("Question and Answer Component" ,() => {

  test('componenent loaded', () =>{
	  render(<Qsection />);
	  const qa = screen.getByTestId("Qindex");
    expect(qa).toBeInTheDocument();
  });

  test('componenent text loaded', () =>{
	  render(<Qsection />);
	  const qa = screen.getByTestId("Qindex");
    expect(qa).toHaveTextContent("QUESTIONS");
  });

  //write a test for sorting
  //write a test for axios
  //write a test for options rendering

});





