import { Product } from "../index";
import { render } from "@testing-library/react";
import { mockProductListResponse } from "../../../mockData/getProductListResponse";

describe("<Product />", () => {
  it("should successfully render on the page", () => {
    const element = render(<Product product={mockProductListResponse[0]} />);
    const basketWrapper = element.queryAllByTestId("product")[0];
    expect(basketWrapper).toBeTruthy();
  });
});
