import { ProductList } from "../index";
import { render } from "@testing-library/react";

describe("<ProductList />", () => {
  it("should successfully render on the page", () => {
    const element = render(<ProductList />);
    const basketWrapper = element.queryAllByTestId("product-list")[0];
    expect(basketWrapper).toBeTruthy();
  });
});
