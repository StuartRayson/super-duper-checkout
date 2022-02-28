import { ProductList } from "../index";
import { render, waitFor } from "@testing-library/react";

describe("<ProductList />", () => {
  it("should successfully render on the page", async () => {
    const element = render(<ProductList />);

    const basketWrapper = element.queryAllByTestId("product-list")[0];
    await waitFor(() => {
      expect(basketWrapper).toBeTruthy();
    });
  });
});
