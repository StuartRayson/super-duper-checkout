import { Basket } from "../index";
import { render, screen } from "@testing-library/react";
import { BasketContext } from "../../../contexts/basketContext";
import {
  BasketItem,
  mockBasketResponse,
} from "../../../mockData/getMockBasketResponse";

export const renderBasketWithContext = (basketItems: BasketItem[] = []) => {
  const context = {
    basketItems,
    basketTotal: "",
    removeFromBasket: jest.fn(),
    addToBasket: jest.fn(),
  };

  const element = render(
    <BasketContext.Provider value={context}>
      <Basket />
    </BasketContext.Provider>
  );

  const { removeFromBasket, addToBasket } = context;

  return {
    ...screen,
    element,
    mocks: {
      removeFromBasket,
      addToBasket,
    },
  };
};

describe("<Basket />", () => {
  it("should successfully render on the page", () => {
    const { queryAllByTestId } = renderBasketWithContext();
    const basketWrapper = queryAllByTestId("basket")[0];
    expect(basketWrapper).toBeTruthy();
  });

  it("should render item in basket", () => {
    const { queryAllByTestId } = renderBasketWithContext([
      mockBasketResponse[0],
    ]);
    const basketWrapper = queryAllByTestId("product-0001")[0];
    expect(basketWrapper).toBeTruthy();
  });
});
