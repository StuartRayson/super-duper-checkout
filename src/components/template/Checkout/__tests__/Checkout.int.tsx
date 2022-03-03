import { Checkout } from "../index";
import {
  renderWithMockContext,
  renderWithContext,
} from "../../../../../__tests__/renderWithContext";
import { waitFor } from "@testing-library/react";
import * as getMockProductListResponse from "../../../../mockData/getMockProductListResponse";
import {
  mockProductListResponse,
  ProductType,
} from "../../../../mockData/getMockProductListResponse";
import userEvent from "@testing-library/user-event";

const productItem: ProductType = {
  sku: "0003",
  productDetails: {
    productImg: "url",
    name: "Test Product",
    description: "Test",
    price: 1,
    offer: null,
  },
};

describe("<Checkout />", () => {
  it("should successfully render the basket and product list", async () => {
    const { queryAllByTestId } = renderWithMockContext(Checkout);

    await waitFor(() => {
      const basket = queryAllByTestId("basket")[0];
      const productList = queryAllByTestId("product-list")[0];

      expect(basket).toBeTruthy();
      expect(productList).toBeTruthy();
    });
  });

  it("should successfully add and remove an item from the basket", async () => {
    const mock = jest
      .spyOn(getMockProductListResponse, "productListResponse")
      .mockResolvedValue(mockProductListResponse([productItem]));

    const { getByTestId, queryAllByTestId } = renderWithContext(Checkout);

    await waitFor(() => {
      userEvent.click(getByTestId(`add-to-basket-${productItem.sku}`));
      const basketItem = queryAllByTestId(`basket-row-${productItem.sku}`)[0];

      expect(basketItem).toBeTruthy();

      userEvent.click(getByTestId(`remove-basket-row-${productItem.sku}`));

      const removedBasketItem = queryAllByTestId(
        `basket-row-${productItem.sku}`
      )[0];

      expect(removedBasketItem).toBeFalsy();
    });

    mock.mockRestore();
  });
});
