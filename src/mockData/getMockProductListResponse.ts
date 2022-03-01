export interface ProductDetails {
  productImg: string;
  name: string;
  description: string;
  price: number;
  currenyCode: {
    prefix: string | null;
    decimal: number;
    suffix: string | null;
  };
  offer: null | {
    type: "multiBuy" | "bogof";
    discount: number;
    limit: number;
  };
}

export interface ProductType {
  sku: string;
  productDetails: ProductDetails;
}

export const mockProductListResponse: Array<ProductType> = [
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

export const productListResponse = async (
  data?: ProductType
): Promise<Array<ProductType>> => {
  return mockProductListResponse;
};
