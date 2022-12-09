/**
 * @jest-environment jsdom
 */
 import { render, screen, cleanup } from "@testing-library/react";
 // Importing the jest testing library
 import '@testing-library/jest-dom';
 import Price from '../../../client/src/product-components/Information/Price.jsx';

 // afterEach function runs after each test suite is executed
 afterEach(() => {
   cleanup(); // Resets the DOM after each test suite
 })

 describe("Price Component" ,() => {

	render(<Price price='999'/>);
	const price = screen.getByText("999",{exact: false});

	// Test 1
	test("Price Rendering", () => {
		expect(price).toBeInTheDocument();
	})

	// Test 2
	test("Price Text", () => {
		expect(price).toHaveTextContent("999");
	})
})


