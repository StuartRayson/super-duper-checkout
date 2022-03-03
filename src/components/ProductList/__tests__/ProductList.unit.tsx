import { ProductList } from "../index";
import { render, waitFor } from "@testing-library/react";
import * as getMockProductListResponse from "../../../mockData/getMockProductListResponse";
import { renderWithMockContext } from "../../../../__tests__/renderWithContext";
import userEvent from "@testing-library/user-event";

describe("<ProductList />", () => {
  it("should successfully render on the page", async () => {
    const element = render(<ProductList />);

    const productList = element.queryAllByTestId("product-list")[0];
    await waitFor(() => {
      expect(productList).toBeTruthy();
    });
  });

  it("should render two items on the product page", async () => {
    const mock = jest.spyOn(getMockProductListResponse, "productListResponse");

    const element = render(<ProductList />);
    await waitFor(() => {
      const productList = element.queryAllByTestId("product");
      expect(mock).toHaveBeenCalledTimes(1);
      expect(productList.length).toEqual(2);
    });
    mock.mockRestore();
  });

  it("should call add Item", async () => {
    const { getByTestId, mocks } = renderWithMockContext(ProductList);

    await waitFor(() => {
      userEvent.click(getByTestId(`add-to-basket-0001`));
      expect(mocks.addToBasket).toHaveBeenCalled();
    });
  });
});
