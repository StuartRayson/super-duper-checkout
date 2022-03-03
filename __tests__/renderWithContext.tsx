import { BasketItem } from "../src/mockData/getMockBasketResponse";
import { render } from "@testing-library/react";
import {
  BasketContext,
  BasketContextProvider,
} from "../src/contexts/basketContext";

export const renderWithMockContext = (
  Component: React.FC,
  basketItems: BasketItem[] = []
) => {
  const context = {
    basketItems,
    basketTotal: 0,
    removeFromBasket: jest.fn(),
    addToBasket: jest.fn(),
  };

  const element = render(
    <BasketContext.Provider value={context}>
      <Component />
    </BasketContext.Provider>
  );

  const { removeFromBasket, addToBasket } = context;

  return {
    ...element,
    mocks: {
      removeFromBasket,
      addToBasket,
    },
  };
};

export const renderWithContext = (Component: React.FC) => {
  const element = render(
    <BasketContextProvider>
      <Component />
    </BasketContextProvider>
  );
  return {
    ...element,
  };
};
