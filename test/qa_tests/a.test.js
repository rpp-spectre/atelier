import {cleanup,fireEvent,render,screen,configure} from '@testing-library/react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Answer from '../../client/src/components-questions/a.jsx';
import '@testing-library/jest-dom';

afterEach(cleanup) // Resets the DOM after each test suite


  var answers =[
    {
        "answer_id": 5988458,
        "body": "is it good?",
        "date": "2022-09-10T00:00:00.000Z",
        "answerer_name": "KL",
        "helpfulness": 6,
        "photos": []
    },
    {
        "answer_id": 5988769,
        "body": "I love these two better",
        "date": "2022-10-20T00:00:00.000Z",
        "answerer_name": "jacky",
        "helpfulness": 3,
        "photos": [
            {
                "id": 5342394,
                "url": "https://i.ibb.co/KxX2zws/61514863fa21.jpg"
            },
            {
                "id": 5342395,
                "url": "https://i.ibb.co/GWH0b3Q/4ed37ef50cb2.jpg"
            }
        ]
    },
    {
        "answer_id": 5988693,
        "body": "I believe so",
        "date": "2022-10-17T00:00:00.000Z",
        "answerer_name": "yoyo",
        "helpfulness": 1,
        "photos": []
    },
    {
        "answer_id": 5988833,
        "body": "not sure",
        "date": "2022-10-21T00:00:00.000Z",
        "answerer_name": "jack543",
        "helpfulness": 1,
        "photos": []
    },
    {
        "answer_id": 5988768,
        "body": "nice one yo!",
        "date": "2022-10-20T00:00:00.000Z",
        "answerer_name": "rpp",
        "helpfulness": 0,
        "photos": []
    }
];

describe("Answer Component" ,() => {


    test('answer loaded', () =>{
      render(<Answer answer={answers[0]} />);

      const sn = screen.getByRole("document");
      expect(sn).toBeInTheDocument();
      expect(sn).toHaveTextContent("KL", {exact:false});
    })




});





