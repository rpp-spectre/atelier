import {cleanup,fireEvent,render,screen,configure} from '@testing-library/react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Q from '../../client/src/components-questions/q.jsx';
import '@testing-library/jest-dom';

afterEach(cleanup) // Resets the DOM after each test suite

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

describe("Q Component" ,() => {


    test('question loaded', () =>{
      render(<Q question={questions[0]} />);

      const sn = screen.getByRole("document");
      expect(sn).toBeInTheDocument();
      const heading = screen.getAllByRole("heading", {level:3});
      expect(heading[0]).toBeInTheDocument();
    })




});





