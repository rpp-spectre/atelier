import {cleanup,fireEvent,render,screen,configure} from '@testing-library/react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Qsearch from '../../client/src/components-questions/qsearch.jsx';
import '@testing-library/jest-dom';

afterEach(cleanup); // Resets the DOM after each test suite

//getbyrole
describe("Search Component" ,() => {
  render(<Qsearch />);


  test('search box loaded', () =>{
	  // render(<Qsearch />);
	  const sb = screen.getByTestId("searchForm");
    expect(sb).toBeInTheDocument();
    const sn = screen.getByRole("textbox");
    expect(sn).toBeInTheDocument();
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





