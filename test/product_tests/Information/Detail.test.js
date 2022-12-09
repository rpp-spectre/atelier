/**
 * @jest-environment jsdom
 */
 import { render, screen, cleanup } from "@testing-library/react";
 // Importing the jest testing library
 import '@testing-library/jest-dom';
 import Detail from '../../../client/src/product-components/Information/Detail.jsx';

 // afterEach function runs after each test suite is executed
 afterEach(() => {
   cleanup(); // Resets the DOM after each test suite
 })

 describe("Detail Component" ,() => {

  var featureData = [
    {feature: 'featureNameOne', value: 'featureValueOne'},
    {feature: 'featureNameTwo', value: 'featureValueTwo'}
  ]

	render(<Detail slogan='slogan' description='description' features={featureData}/>);
	const slogan = screen.getByText("slogan",{exact: false});
  const description = screen.getByText("description",{exact: false});
  const featureOne = screen.getByText("featureNameOne",{exact: false});
  const featureTwo = screen.getByText("featureNameTwo",{exact: false});

	test("slogan Rendering", () => {
		expect(slogan).toBeInTheDocument();
	})

	test("slogan Text", () => {
		expect(slogan).toHaveTextContent("slogan");
	})

	test("description Text", () => {
		expect(description).toHaveTextContent("description");
	})

	test("features Text", () => {
		expect(featureOne).toHaveTextContent("featureNameOne: featureValueOne");
    expect(featureTwo).toHaveTextContent("featureNameTwo: featureValueTwo");
	})

})


