import { BasketRow } from "../index";
import { render } from "@testing-library/react";
import { mockBasketResponse } from "../../../../mockData/getMockBasketResponse";

describe("<BasketRow />", () => {
  it("should successfully render on the page", () => {
    const { sku } = mockBasketResponse[0];
    const element = render(<BasketRow {...mockBasketResponse[0]} />);
    const basketRow = element.queryAllByTestId(`basket-row-${sku}`)[0];
    expect(basketRow).toBeTruthy();
  });

  it("should render total price", () => {
    const { sku } = mockBasketResponse[0];

    const item = {
      ...mockBasketResponse[0],
      qty: 2,
    };
    const element = render(<BasketRow {...item} />);
    const price = element.queryAllByTestId(`product-price-${sku}`)[0];
    expect(price.textContent).toEqual("£5.00");
  });

  it("should render discount price", () => {
    const { sku } = mockBasketResponse[0];

    const item = {
      ...mockBasketResponse[0],
      qty: 2,
    };
    const element = render(<BasketRow {...item} />);
    const price = element.queryAllByTestId(`product-discount-${sku}`)[0];
    expect(price.textContent).toEqual("£1.00");
  });
});
