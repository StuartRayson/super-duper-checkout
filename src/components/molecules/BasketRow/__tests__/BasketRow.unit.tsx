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

  it("should render offerPrice", () => {
    const item = {
      ...mockBasketResponse[0],
      qty: 2,
    };
    const element = render(<BasketRow {...item} />);
    const price = element.queryAllByTestId(`product-price`)[0];
    expect(price.textContent).toEqual("4");
  });

  it("should render standard price", () => {
    const item = {
      ...mockBasketResponse[0],
      productDetails: {
        ...mockBasketResponse[0].productDetails,
        offer: null,
      },
      qty: 2,
    };
    const element = render(<BasketRow {...item} />);
    const price = element.queryAllByTestId(`product-price`)[0];
    expect(price.textContent).toEqual("5");
  });
});
