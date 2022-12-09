
/**
 * @jest-environment jsdom
 */
 import { render, screen, cleanup } from "@testing-library/react";
 // Importing the jest testing library
 import '@testing-library/jest-dom';
 import Style from '../../../client/src/product-components/Style/Style.jsx';

 // afterEach function runs after each test suite is executed
 afterEach(() => {
   cleanup(); // Resets the DOM after each test suite
 })

 describe("Style Component" ,() => {

  var styleListData = [
    { style_id: '123', name: 'nameOne', photos: [{url: '', thumbnail_url: ''}]},
    {style_id: '124', name: 'nameTwo', photos: [{url: '', thumbnail_url: ''}]},
  ]

	render(<Style styleList={styleListData}/>);

  // const sizeList = screen.getAllByRole("option");
  // const sizeOption = screen.getByRole("option", { name: 'XS'});
  // const quantityOption = screen.getByRole("option", { name: '7'});
  // const cartButton = screen.getByRole("button", { name: "Add To Cart" });

  const images = screen.getAllByRole("img");
  const checkbox = screen.getAllByRole("checkbox");

	// Test 1
	test("Style Rendering, including style images and checkbox", () => {
    expect(images[0]).toBeInTheDocument();
    expect(checkbox[0]).toBeInTheDocument();
	})

	// Test 2
	test("image and checkbox Numbers", () => {
		expect(images.length).toBe(2);
    expect(checkbox.length).toBe(1);
	})
})








styleList: [{style_id: '', name: 'default', photos: [{thumbnail_url: ''}]}]



