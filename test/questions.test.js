import {cleanup,fireEvent,render,screen,configure} from '@testing-library/react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Qsection from '../client/src/components-questions/qindex.jsx';
import Qlist from '../client/src/components-questions/qlist.jsx';
import Q from '../client/src/components-questions/q.jsx';
import Alist from '../client/src/components-questions/alist.jsx';
import Answer from '../client/src/components-questions/a.jsx';
import Aphotos from '../client/src/components-questions/photos/aphotos.jsx';
import Aphoto from '../client/src/components-questions/photos/aphoto.jsx';
import Photo from '../client/src/components-questions/photos/photo.jsx';
import Ahcounter from '../client/src/components-questions/counter/ahcounter.jsx';
import Qhcounter from '../client/src/components-questions/counter/qhcounter.jsx';
import Addaform from '../client/src/components-questions/addforms/addaform.jsx';
import Addqform2 from '../client/src/components-questions/addforms/addqform2.jsx';
import Answeradd from '../client/src/components-questions/addforms/answeradd.jsx';
import Qadd from '../client/src/components-questions/addforms/qadd.jsx';
import '@testing-library/jest-dom';

afterEach(cleanup); // Resets the DOM after each test suite


const call = require('../server/controllers/questions.js');

test('adds 1 + 2 to equal 3', () => {
  expect(call.sum(1, 2)).toBe(3);
});

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

describe("Question list Component" ,() => {

  test('componenent loaded', () =>{
    const renderer = new ShallowRenderer();
    renderer.render(<Qlist />);
	  // render(<Q />);
	  // let ql = screen.getByTestId("tqlist");
    // expect(ql).toBeInTheDocument();
  });

  // test('componenent text loaded', () =>{
	//   render(<Qsection />);
	//   const qa = screen.getByTestId("Qindex");
  //   expect(qa).toHaveTextContent("QUESTIONS");
  // });

  //write

});


