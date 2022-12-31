import {cleanup,fireEvent,render,screen,configure} from '@testing-library/react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Ahcounter from '../../../client/src/components-questions/counter/ahcounter.jsx';
import '@testing-library/jest-dom';

afterEach(cleanup); // Resets the DOM after each test suite

//getbyrole
describe("Answer helpfulness counter Component" ,() => {

  test('increments counter by one when helpful  is clicked', () => {
    let counter = 5;
    const {getByText} = render(<Ahcounter acounter={counter}/>);
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





