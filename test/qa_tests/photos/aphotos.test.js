import {cleanup,fireEvent,render,screen,configure} from '@testing-library/react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Aphotos from '../../../client/src/components-questions/photos/aphotos.jsx';
import '@testing-library/jest-dom';

afterEach(cleanup); // Resets the DOM after each test suite

var photos=[
  {
      "id": 5342394,
      "url": "https://i.ibb.co/KxX2zws/61514863fa21.jpg"
  },
  {
      "id": 5342395,
      "url": "https://i.ibb.co/GWH0b3Q/4ed37ef50cb2.jpg"
  }
];
//getbyrole
describe("Search Component" ,() => {
  render(<Aphotos photos={photos} />);


  test('search box loaded', () =>{
	  // render(<Qsearch />);
	  // const sb = screen.getByTestId("searchForm");
    // expect(sb).toBeInTheDocument();
    const sn = screen.getByRole("group");
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





