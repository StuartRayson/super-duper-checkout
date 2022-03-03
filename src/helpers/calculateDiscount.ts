import { BasketItem } from "../mockData/getMockBasketResponse";

export const calculateDiscount = (item: BasketItem) => {
  const { productDetails, qty } = item;
  const { offer } = productDetails;

  if (offer) {
    return Math.floor(qty / offer.limit) * offer.discount;
  }

  return 0;
};
