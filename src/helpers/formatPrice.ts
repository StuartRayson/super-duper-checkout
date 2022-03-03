export const formatPrice = (price: number) => {
  const priceFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "GBP",
  });

  return priceFormat.format(price);
};
