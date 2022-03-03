import { formatPrice } from "../formatPrice";

describe("formatPrice", () => {
  it("should format number to GBP currency ", () => {
    const price = formatPrice(4);
    expect(price).toEqual("£4.00");
  });
});
