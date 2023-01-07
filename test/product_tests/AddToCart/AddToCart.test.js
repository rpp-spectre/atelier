/**
 * @jest-environment jsdom
 */
 import { render, screen, cleanup } from "@testing-library/react";
 import userEvent from "@testing-library/user-event";
 // Importing the jest testing library
 import '@testing-library/jest-dom';
 import AddToCart from '../../../client/src/product-components/AddToCart/AddToCart.jsx';
//  import renderer from 'react-test-renderer';
import React from "react";
import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";


//  afterEach function runs after each test suite is executed
// afterEach(() => {
//   cleanup(); // Resets the DOM after each test suite
// });

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  cleanup();
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});


 describe("AddToCart Component" ,() => {

  var sizeListData = [
    { quantity: 7, size: 'XS', sku: '123456'},
    { quantity: 8, size: 'S', sku: '123457'},
  ]

  var handleClickTrackingMock = function(e) {

  }

	// Test 1
	test("AddToCart Rendering, including size and quantity dropdown option, addToCart button", () => {
    act(() => {
      render(<AddToCart sizeList={sizeListData} sizeOutOfStock={false} handleClickTracking={handleClickTrackingMock}/>);
    });

    var sizeList = screen.getAllByRole("option");
    var sizeOption = screen.getByRole("option", { name: 'XS'});

    var quantityOption = screen.getByRole("option", { name: '-'});
    var cartButton = screen.getByRole("button", { name: "Add To Cart" });

    expect(sizeList[0]).toBeInTheDocument();
    expect(sizeOption).toBeInTheDocument();
    expect(quantityOption).toBeInTheDocument();
    expect(cartButton).toBeInTheDocument();
    expect(sizeList.length).toBe(4);
	})


  test("handle size change event", async () => {
    act(() => {
      render(<AddToCart sizeList={sizeListData} sizeOutOfStock={false} handleClickTracking={handleClickTrackingMock}/>);
    });

    expect(screen.getAllByRole("combobox")[0]).toHaveDisplayValue("Select Size");

    var selectedSizeOption = screen.getByTestId("SizeSelector");
    expect(screen.getByRole("option", { name: 'Select Size'}).selected).toBe(true);

    await act(async () => {
      await userEvent.selectOptions(selectedSizeOption, 'S');
    });
    await act(async () => {
      await userEvent.selectOptions(selectedSizeOption, 'Select Size');
    });
    await act(async () => {
      await userEvent.selectOptions(selectedSizeOption, 'XS');
    });

    // console.log('testid', screen.getByTestId(1));
    expect(screen.getByRole("option", { name: 'XS'}).selected).toBe(true);
    expect(screen.getByRole("option", { name: '1'})).toBeInTheDocument();
	})


  test("handle quantity change event", async () => {
    act(() => {
      render(<AddToCart sizeList={sizeListData} sizeOutOfStock={false} handleClickTracking={handleClickTrackingMock}/>);
    });

    var selectedSizeOption = screen.getByTestId("SizeSelector");
    var selectedQuantityOption = screen.getByTestId("QuantitySelector");

    expect(screen.getByRole("option", { name: '-'}).selected).toBe(true);

    await act(async () => {
      await userEvent.selectOptions(selectedSizeOption, 'XS');
    });

    await act(async () => {
      await userEvent.selectOptions(selectedQuantityOption, '3');
    });

    expect(screen.getByRole("option", { name: '3'}).selected).toBe(true);
	})

})



