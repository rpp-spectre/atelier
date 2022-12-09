/**
 * @jest-environment jsdom
 */
 import { render, screen, cleanup } from "@testing-library/react";
 // Importing the jest testing library
 import '@testing-library/jest-dom';
 import Title from '../../../client/src/product-components/Information/Title.jsx';

 // afterEach function runs after each test suite is executed
 afterEach(() => {
   cleanup(); // Resets the DOM after each test suite
 })

 describe("Title Component" ,() => {

	render(<Title name='testName'/>);
	const title = screen.getByText("testName",{exact: false});

	// Test 1
	test("Title Rendering", () => {
		expect(title).toBeInTheDocument();
	})

	// Test 2
	test("Title Text", () => {
		expect(title).toHaveTextContent("testName");
	})
})


