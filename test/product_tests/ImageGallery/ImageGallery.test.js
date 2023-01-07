/**
 * @jest-environment jsdom
 */
 import { render, screen, cleanup } from "@testing-library/react";
 // Importing the jest testing library
 import '@testing-library/jest-dom';
 import ImageGallery from '../../../client/src/product-components/ImageGallery/ImageGallery.jsx';
 import React from "react";
 import { unmountComponentAtNode } from "react-dom";
 import { act } from "react-dom/test-utils";

//  afterEach function runs after each test suite is executed
 afterEach(() => {
   cleanup(); // Resets the DOM after each test suite
 })

 describe("ImageGallery Component" ,() => {

  var photoTestData = [
    { url: 'imageOne.jpg', thumbnail_url: 'imageOneURL.jpg'},
    { url: 'imageTwo.jpg', thumbnail_url: 'imageTwoURL.jpg'},
    { url: 'imageThree.jpg', thumbnail_url: 'imageThreeURL.jpg'},
    { url: 'imageFour.jpg', thumbnail_url: 'imageFourURL.jpg'},
    { url: 'imageFive.jpg', thumbnail_url: 'imageFiveURL.jpg'},
    { url: 'imageSix.jpg', thumbnail_url: 'imageSixURL.jpg'},
    { url: 'imageSeven.jpg', thumbnail_url: 'imageSevenURL.jpg'},
    { url: 'imageEight.jpg', thumbnail_url: 'imageEightURL.jpg'}
  ]

  var resizeImageMock = function(url) {
    return url;
  }

  var handleClickTrackingMock = function(e) {

  }

	// Test 1
	test("ImageGallery Rendering", () => {
    act(() => {
      render(<ImageGallery photos={photoTestData} showNum={() => Math.min(photoTestData.length, 7)} resizeImage={resizeImageMock} handleClickTracking={handleClickTrackingMock}/>);
    });
    var images = screen.getAllByRole("img");

    expect(images[0]).toBeInTheDocument();
    expect(images.length).toBe(8);
	})

  	// Test 2
	test("Previous and next arrow Rendering and click event", () => {
    act(() => {
      render(<ImageGallery photos={photoTestData} showNum={() => Math.min(photoTestData.length, 7)} resizeImage={resizeImageMock} handleClickTracking={handleClickTrackingMock}/>);
    });

    var images = screen.getAllByRole("img");
    expect(images[0]).toHaveAttribute('src', 'imageOne.jpg');

    var nextArrow = screen.getByText("❯");
    expect(nextArrow).toBeInTheDocument();

    act(() => {
        nextArrow.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    act(() => {
      nextArrow.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    act(() => {
      nextArrow.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    act(() => {
      nextArrow.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    act(() => {
      nextArrow.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    act(() => {
      nextArrow.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    act(() => {
      nextArrow.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    var images = screen.getAllByRole("img");
    expect(images[0]).toHaveAttribute('src', 'imageEight.jpg');

    var prevArrow = screen.getByText("❮");
    expect(prevArrow).toBeInTheDocument();

    act(() => {
      prevArrow.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    var images = screen.getAllByRole("img");
    expect(images[0]).toHaveAttribute('src', 'imageSeven.jpg');

	})

  // Test 3
	test("Down and up arrow click event, image column click event", () => {
    act(() => {
      render(<ImageGallery photos={photoTestData} showNum={() => Math.min(photoTestData.length, 7)} resizeImage={resizeImageMock} handleClickTracking={handleClickTrackingMock}/>);
    });

    var downArrow = screen.getByTestId("downArrow");
    act(() => {
      downArrow.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    var images = screen.getAllByRole("img");
		expect(images.length).toBe(6);

    var upArrow = screen.getByTestId("upArrow");
    act(() => {
      upArrow.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    var images = screen.getAllByRole("img");
		expect(images.length).toBe(8);

    act(() => {
      images[6].dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    images = screen.getAllByRole("img");
    expect(images[0]).toHaveAttribute('src', 'imageSix.jpg');

	})

})

