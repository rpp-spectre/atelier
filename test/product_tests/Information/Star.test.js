/**
 * @jest-environment jsdom
 */
 import { render, screen, cleanup } from "@testing-library/react";
 // Importing the jest testing library
 import '@testing-library/jest-dom';
 import Star from '../../../client/src/product-components/Information/Star.jsx';

 // afterEach function runs after each test suite is executed
 afterEach(() => {
   cleanup(); // Resets the DOM after each test suite
 })

 describe("Star Component" ,() => {

	render(<Star />);
	const star = screen.getByText("Star",{exact: false});

	// Test 1
	test("Star Rendering", () => {
		expect(star).toBeInTheDocument();
	})

	// Test 2
	test("Star Text", () => {
		expect(star).toHaveTextContent("\u2606");
	})
})


