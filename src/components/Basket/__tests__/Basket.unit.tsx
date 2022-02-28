import { Basket } from "../index";
import { render } from "@testing-library/react";

describe("<Basket />", () => {
  it("should successfully render on the page", () => {
    const element = render(<Basket />);
    const basketWrapper = element.queryAllByTestId("basket")[0];
    expect(basketWrapper).toBeTruthy();
  });
});
