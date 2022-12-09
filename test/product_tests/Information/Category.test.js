/**
 * @jest-environment jsdom
 */
 import { render, screen, cleanup } from "@testing-library/react";
 // Importing the jest testing library
 import '@testing-library/jest-dom';
 import Category from '../../../client/src/product-components/Information/Category.jsx';

 // afterEach function runs after each test suite is executed
 afterEach(() => {
   cleanup(); // Resets the DOM after each test suite
 })

 describe("Category Component" ,() => {

	render(<Category category='Jackets'/>);
	const category = screen.getByText("Jackets",{exact: false});

	// Test 1
	test("Category Rendering", () => {
		expect(category).toBeInTheDocument();
	})

	// Test 2
	test("Category Text", () => {
		expect(category).toHaveTextContent("Jackets");
	})
})


