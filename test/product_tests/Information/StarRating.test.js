/**
 * @jest-environment jsdom
 */
 import { render, screen, cleanup } from "@testing-library/react";
 // Importing the jest testing library
 import '@testing-library/jest-dom';
 import StarRating from '../../../client/src/product-components/Information/StarRating.jsx';

 // afterEach function runs after each test suite is executed
 afterEach(() => {
   cleanup(); // Resets the DOM after each test suite
 })

 describe("StarRating Component" ,() => {

	render(<StarRating />);
	const starRating = screen.getByText("\u2606",{exact: false});

	// Test 1
	test("StarRating Rendering", () => {
		expect(starRating).toBeInTheDocument();
	})

	// Test 2
	test("StarRating Text", () => {
		expect(starRating).toHaveTextContent("\u2606\u2606\u2606\u2606\u2606");
	})
})


