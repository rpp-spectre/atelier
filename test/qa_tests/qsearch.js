import {cleanup,fireEvent,render,screen,configure} from '@testing-library/react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Qsearch from '../../client/src/components-questions/qsearch.jsx';
import '@testing-library/jest-dom';
import axios from "axios";

afterEach(cleanup) // Resets the DOM after each test suite
// afterEach(() => {
//   cleanup();
//   jest.mock('axios');
// });

var noQ = 1;
  var questions =[
    {
        "question_id": 640996,
        "question_body": "Is this product responsibily sourced?",
        "question_date": "2022-05-25T00:00:00.000Z",
        "asker_name": "Tyler Postman",
        "question_helpfulness": 55,
        "reported": false,
        "answers": {
            "5988458": {
                "id": 5988458,
                "body": "is it good?",
                "date": "2022-09-10T00:00:00.000Z",
                "answerer_name": "KL",
                "helpfulness": 6,
                "photos": []
            }
        }
    },
    {
        "question_id": 631377,
        "question_body": "I'm allergic to dye #17, does this product contain any?",
        "question_date": "2019-01-24T00:00:00.000Z",
        "asker_name": "l33tgamer",
        "question_helpfulness": 21,
        "reported": false,
        "answers": {
            "5897227": {
                "id": 5897227,
                "body": "Yes",
                "date": "2019-11-24T00:00:00.000Z",
                "answerer_name": "n00bgamer",
                "helpfulness": 8,
                "photos": []
            }
        }
    },
    {
        "question_id": 631382,
        "question_body": "Where is this product made?",
        "question_date": "2018-10-04T00:00:00.000Z",
        "asker_name": "jbilas",
        "question_helpfulness": 12,
        "reported": false,
        "answers": {
            "5897195": {
                "id": 5897195,
                "body": "China",
                "date": "2018-08-04T00:00:00.000Z",
                "answerer_name": "Seller",
                "helpfulness": 20,
                "photos": []
            }
        }
    }
];

describe("Search Component" ,() => {


    test('search box loaded', () =>{
      jest.mock('axios');
      let pid= 71810;
      let handleClickTracking = jest.fn((e) => {e});
	    render(<Qsearch pid={pid} handleClickTracking={handleClickTracking} />);
      // render(<Qsearch />);
      const sf = screen.getByTestId("searchForm");
      const sn = screen.getByRole("textbox");
      expect(sn).toBeInTheDocument();
      expect(sf).toBeInTheDocument();
    })

    test('Add a question loaded', () =>{
      jest.mock('axios');
      let pid= 71810;
      let handleClickTracking = jest.fn((e) => {e});
	    render(<Qsearch pid={pid} handleClickTracking={handleClickTracking} />);
      // render(<Qsearch />);
      const sb = screen.getByRole("button");
      expect(sb).toBeInTheDocument();
      expect(sb).toHaveTextContent("Add A Question");
    })
    //write a test for options rendering
    // test('show load more questions button if there are more questions', () =>{
    //   // questions.length=5;
    //   render(<Qsearch />);
    //   // const lb = screen.getByRole("button", {testid:"load"});
    //   console.log(noQ);
    //   // console.log(questions.length);
    //   console.log(noQ >= questions.length);

    //   // const sc = screen.queryByTestId("load");
    //   const sc = screen.queryByText("test");
    //   // console.log(sc);
    //   expect(sc).toBeInTheDocument();
    //   expect(sc).toHaveTextContent("LOAD MORE QUESTIONS");
    //   // const
    //   // expect(sb).toHaveTextContent("Load");
    // })



  // test('componenent text loaded', () =>{
	//   render(<Qsection />);
	//   const qa = screen.getByTestId("Qindex");
  //   expect(qa).toHaveTextContent("QUESTIONS");
  // });

  //write a test for sorting
  //write a test for axios


});





