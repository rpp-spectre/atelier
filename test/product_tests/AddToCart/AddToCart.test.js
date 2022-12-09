/**
 * @jest-environment jsdom
 */
 import { render, screen, cleanup } from "@testing-library/react";
 // Importing the jest testing library
 import '@testing-library/jest-dom';
 import AddToCart from '../../../client/src/product-components/AddToCart/AddToCart.jsx';

 // afterEach function runs after each test suite is executed
 afterEach(() => {
   cleanup(); // Resets the DOM after each test suite
 })

 describe("AddToCart Component" ,() => {

  var sizeListData = [
    { quantity: 7, size: 'XS', sku: '123456'},
    { quantity: 8, size: 'S', sku: '123457'},
  ]

	render(<AddToCart sizeList={sizeListData}/>);

  const sizeList = screen.getAllByRole("option");
  const sizeOption = screen.getByRole("option", { name: 'XS'});
  const quantityOption = screen.getByRole("option", { name: '7'});
  const cartButton = screen.getByRole("button", { name: "Add To Cart" });

	// Test 1
	test("AddToCart Rendering, including size and quantity dropdown option, addToCart button", () => {
    expect(sizeList[0]).toBeInTheDocument();
    expect(sizeOption).toBeInTheDocument();
    expect(quantityOption).toBeInTheDocument();
    expect(cartButton).toBeInTheDocument();

	})

	// Test 2
	test("option Numbers in total", () => {
		expect(sizeList.length).toBe(9);
	})
})


