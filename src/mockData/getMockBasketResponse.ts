import { ProductType } from "./getMockProductListResponse";

export interface BasketItem extends ProductType {
  qty: number;
}

export const mockBasketResponse: Array<BasketItem> = [
  {
    sku: "0001",
    qty: 1,
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
    qty: 1,
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

export const Response = async (): Promise<Array<ProductType>> => {
  return mockBasketResponse;
};
