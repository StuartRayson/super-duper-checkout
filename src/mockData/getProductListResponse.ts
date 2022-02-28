import { Product } from "./types/productListResponse";

export const productListResponse = (data?: Product): Array<Product> => {
  return [
    {
      sku: "0001",
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
    },
    {
      sku: "0002",
      productDetails: {
        productImg: "url",
        name: "Toilet Paper",
        description: "Luxurious extra dense toilet paper (50 ply)",
        price: 0.65,
        currenyCode: {
          prefix: "£",
          decimal: 2,
          suffix: null,
        },
        offer: {
          type: "multiBuy",
          discount: 0.65,
          limit: 6,
        },
      },
    },
  ];
};
