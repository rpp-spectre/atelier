/**
 * @jest-environment jsdom
 */
import { render, screen, cleanup } from "@testing-library/react";
// Importing the jest testing library
import '@testing-library/jest-dom';
import Overview from '../client/src/product-components/Overview.jsx';

// afterEach function runs after each test suite is executed
afterEach(() => {
	cleanup(); // Resets the DOM after each test suite
})

describe("Overview Component" ,() => {

	render(<Overview />);
	const overview = screen.getByTestId("overview");

	// Test 1
	test("Overview Rendering", () => {
		expect(overview).toBeInTheDocument();
	})

	// Test 2
	test("Overview Text", () => {
		expect(overview).toHaveTextContent("Overview");
	})
})
