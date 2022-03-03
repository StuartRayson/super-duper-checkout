import { BasketItem } from "../../mockData/getMockBasketResponse";
import { calculatePrice } from "../calculatePrice";

const item: BasketItem = {
  sku: "0001",
  qty: 2,
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
};

describe("calculatePrice", () => {
  it("should calculate offer price if offer available ", () => {
    const price = calculatePrice(item);

    expect(price).toEqual(4);
  });

  it("should calculate price if no offer is applied ", () => {
    const price = calculatePrice(item, {
      withOfferPriceApplied: false,
    });

    expect(price).toEqual(5);
  });
});
