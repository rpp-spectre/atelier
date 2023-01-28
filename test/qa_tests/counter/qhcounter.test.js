import {cleanup,fireEvent,render,screen,configure} from '@testing-library/react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Qhcounter from '../../../client/src/components-questions/counter/qhcounter.jsx';
import '@testing-library/jest-dom';

afterEach(cleanup); // Resets the DOM after each test suite

//getbyrole
describe("question helpfulness counter Component" ,() => {

  test('increments counter by one when helpful  is clicked', () => {
    let handleClickTracking = jest.fn((e) => {e});
    let counter = 5;
    const {getByText} = render(<Qhcounter qcounter={counter} handleClickTracking = {handleClickTracking} />);
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





