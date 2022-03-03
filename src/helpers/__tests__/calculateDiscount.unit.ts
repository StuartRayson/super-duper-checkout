import { calculateDiscount } from "../calculateDiscount";

describe("calculateDiscount", () => {
  it("should calculate discount price if available ", () => {
    const price = calculateDiscount({
      sku: "0001",
      qty: 4,
      productDetails: {
        productImg: "url",
        name: "Face Mask",
        description: "Stops you accidentally sneezing on people",
        price: 2.5,
        offer: {
          type: "multiBuy",
          discount: 1,
          limit: 2,
        },
      },
    });

    expect(price).toEqual(2);
  });

  it("should return 0 if no offer price", () => {
    const price = calculateDiscount({
      sku: "0001",
      qty: 2,
      productDetails: {
        productImg: "url",
        name: "Face Mask",
        description: "Stops you accidentally sneezing on people",
        price: 2.5,
        offer: null,
      },
    });

    expect(price).toEqual(0);
  });
});
