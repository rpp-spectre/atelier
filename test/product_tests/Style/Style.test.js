
/**
 * @jest-environment jsdom
 */
 import { render, screen, cleanup } from "@testing-library/react";
// Importing the jest testing library
 import '@testing-library/jest-dom';
 import Style from '../../../client/src/product-components/Style/Style.jsx';
//  import userEvent from '@testing-library/user-event';
 import React from "react";
 import { unmountComponentAtNode } from "react-dom";
 import { act } from "react-dom/test-utils";

//  afterEach function runs after each test suite is executed
 afterEach(() => {
   cleanup(); // Resets the DOM after each test suite
 });

describe("Style Component" ,() => {

  var styleListData = [
    { style_id: '123', name: 'nameOne', photos: [{url: 'nameOneURL.jpg', thumbnail_url: 'nameOne.jpg'}]},
    {style_id: '124', name: 'nameTwo', photos: [{url: 'nameTwoURL.jpg', thumbnail_url: 'nameTwo.jpg'}]},
  ]

  var resizeImageMock = function(url) {
    return url;
  }

  var handleClickTrackingMock = function(e) {

  }

  it("Style Rendering, including style images and checkbox", () => {

    act(() => {
      render(<Style styleList={styleListData} changeStyle={() => {}} resizeImage={resizeImageMock} handleClickTracking={handleClickTrackingMock}/>);
    });

    var images = screen.getAllByRole("img");
    var checkbox = screen.getAllByRole("checkbox");

    expect(images[0]).toBeInTheDocument();
    expect(images[0]).toHaveAttribute('src', 'nameOne.jpg');

    expect(checkbox[0]).toBeInTheDocument();
    expect(checkbox[0]).toHaveAttribute('id', '123');

    expect(images.length).toBe(2);
    expect(checkbox.length).toBe(1);

  });


  it("click event on style image", () => {

    act(() => {
      render(<Style styleList={styleListData} changeStyle={() => {}} resizeImage={resizeImageMock} handleClickTracking={handleClickTrackingMock}/>);
    });

    var checkbox = screen.getAllByRole("checkbox");
    var imageOne = screen.getByAltText('nameOne');
    var imageTwo = screen.getByAltText('nameTwo');

    expect(checkbox[0]).toHaveAttribute('id', '123');
    expect(imageOne).toBeInTheDocument();
    expect(imageTwo).toBeInTheDocument();

    act(() => {
      imageOne.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    act(() => {
      imageTwo.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    checkbox = screen.getAllByRole("checkbox");
    expect(checkbox[0]).toHaveAttribute('id', '124');

  });

});
