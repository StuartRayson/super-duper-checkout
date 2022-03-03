import { Product } from "../index";
import { render } from "@testing-library/react";
import { mockProductListResponse } from "../../../../mockData/getMockProductListResponse";

describe("<Product />", () => {
  it("should successfully render on the page", () => {
    const element = render(<Product {...mockProductListResponse()[0]} />);
    const product = element.queryAllByTestId("product")[0];
    expect(product).toBeTruthy();
  });

  it("should render tag if offer is applied ", () => {
    const { sku } = mockProductListResponse()[0];
    const element = render(<Product {...mockProductListResponse()[0]} />);
    const product = element.queryAllByTestId(`product-tag-${sku}`)[0];
    expect(product).toBeTruthy();
  });
});
