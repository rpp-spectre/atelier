import Alist from '../../client/src/components-questions/alist.jsx';
import {cleanup,fireEvent,render,screen,configure} from '@testing-library/react';
import '@testing-library/jest-dom';
import axios from "axios";

afterEach(cleanup) // Resets the DOM after each test suite

var qid = 71698;

jest.mock("axios");

describe('alist', () =>{
  describe("when API call is successful", () => {
    it("should return users list", () => {
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
      axios.get.mockResolvedValueOnce(answers);
      const result = await setAnswers(answers);

      expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/users`);
      expect(result).toEqual(users);

    });
  });

  describe("when API call fails", () => {
    it("should return empty users list", () => {
      // ...
    });
  });
  // test('',()=>{
  //   render(<Alist qid={qid} />);


  // });
});