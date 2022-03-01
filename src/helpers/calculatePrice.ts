import { BasketItem } from "../mockData/getMockBasketResponse";

export const calculatePrice = (item: BasketItem) => {
  const { productDetails, qty } = item;
  const { offer, price } = productDetails;
  const totalPrice = price * qty;

  if (offer) {
    return totalPrice - Math.floor(qty / offer.limit) * offer.discount;
  }

  return totalPrice;
};
