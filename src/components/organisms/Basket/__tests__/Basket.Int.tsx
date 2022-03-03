import { Basket } from "../index";
import { mockBasketResponse } from "../../../../mockData/getMockBasketResponse";
import { renderWithMockContext } from "../../../../../__tests__/renderWithContext";
import userEvent from "@testing-library/user-event";

describe("<Basket />", () => {
  it("should successfully render on the page", () => {
    const { queryAllByTestId } = renderWithMockContext(Basket);
    const basketWrapper = queryAllByTestId("basket")[0];
    expect(basketWrapper).toBeTruthy();
  });

  it("should render item in basket", () => {
    const { queryAllByTestId } = renderWithMockContext(Basket, [
      mockBasketResponse[0],
    ]);
    const basketWrapper = queryAllByTestId("basket-row-0001")[0];
    expect(basketWrapper).toBeTruthy();
  });

  it("should call removeFromBasket when action is clicked", () => {
    const { getByTestId, mocks } = renderWithMockContext(Basket, [
      mockBasketResponse[0],
    ]);

    userEvent.click(getByTestId(`remove-basket-row-0001`));
    expect(mocks.removeFromBasket).toHaveBeenCalled();
  });
});
