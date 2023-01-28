import {cleanup,fireEvent,render,screen,configure,renderHook, act} from '@testing-library/react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Ahcounter from '../../../client/src/components-questions/counter/ahcounter.jsx';
import '@testing-library/jest-dom';
import axios from 'axios';

// afterEach(cleanup); // Resets the DOM after each test suite
afterEach(() => {
  cleanup();
  jest.mock('axios');
});

//getbyrole
describe("Answer helpfulness counter Component" ,() => {

  test('increments counter by one when helpful  is clicked', () => {
    let counter = 5;
    let handleClickTracking = jest.fn((e) => {e});
    const {getByText} = render(<Ahcounter acounter={counter} handleClickTracking={handleClickTracking} />);
    fireEvent.click(getByText('Yes'));
    counter++;

    expect(counter).toBe(6);
  });


  // test('componenent text loaded', () =>{
	//   render(<Qsection />);
	//   const qa = screen.getByTestId("Qindex");
  //   expect(qa).toHaveTextContent("QUESTIONS");
  // });

  //write a test for sorting
  //write a test for axios
  //write a test for options rendering

});





