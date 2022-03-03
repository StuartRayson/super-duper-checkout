export interface ProductDetails {
  productImg: string;
  name: string;
  description: string;
  price: number;
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

export const mockProductListResponse = (
  mockData?: Array<ProductType>
): Array<ProductType> => {
  return (
    mockData || [
      {
        sku: "0001",
        productDetails: {
          productImg: "./face-mask.webp",
          name: "Face Mask",
          description: "Stops you accidentally sneezing on people",
          price: 2.5,
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
          productImg: "./toilet-roll.webp",
          name: "Toilet Paper",
          description: "Luxurious extra dense toilet paper (50 ply)",
          price: 0.65,
          offer: {
            type: "multiBuy",
            discount: 0.65,
            limit: 6,
          },
        },
      },
    ]
  );
};

export const productListResponse = async (
  data?: ProductType
): Promise<Array<ProductType>> => {
  return mockProductListResponse();
};
