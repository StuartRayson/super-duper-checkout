import { calculatePrice } from "../calculatePrice";

describe("calculatePrice", () => {
  it("should calculate offer price if offer available ", () => {
    const price = calculatePrice({
      sku: "0001",
      qty: 2,
      productDetails: {
        productImg: "url",
        name: "Face Mask",
        description: "Stops you accidentally sneezing on people",
        price: 2.5,
        currenyCode: {
          prefix: "£",
          decimal: 2,
          suffix: null,
        },
        offer: {
          type: "multiBuy",
          discount: 1,
          limit: 2,
        },
      },
    });

    expect(price).toEqual(4);
  });

  it("should calculate price if no offer is applied ", () => {
    const price = calculatePrice({
      sku: "0001",
      qty: 2,
      productDetails: {
        productImg: "url",
        name: "Face Mask",
        description: "Stops you accidentally sneezing on people",
        price: 2.5,
        currenyCode: {
          prefix: "£",
          decimal: 2,
          suffix: null,
        },
        offer: null,
      },
    });

    expect(price).toEqual(5);
  });
});
