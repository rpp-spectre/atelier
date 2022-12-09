/**
 * @jest-environment jsdom
 */
 import { render, screen, cleanup } from "@testing-library/react";
 // Importing the jest testing library
 import '@testing-library/jest-dom';
 import ImageGallery from '../../../client/src/product-components/ImageGallery/ImageGallery.jsx';

 // afterEach function runs after each test suite is executed
 afterEach(() => {
   cleanup(); // Resets the DOM after each test suite
 })

 describe("ImageGallery Component" ,() => {

  var photoTestData = [
    { url: '', thumbnail_url: ''},
    { url: '', thumbnail_url: ''},
  ]

	render(<ImageGallery photos={photoTestData}/>);
  const images = screen.getAllByRole("img");

	// Test 1
	test("ImageGallery Rendering", () => {
    expect(images[0]).toBeInTheDocument();
	})

	// Test 2
	test("Image Numbers", () => {
		expect(images.length).toBe(2);
	})
})


