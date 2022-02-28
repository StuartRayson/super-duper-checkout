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

export interface Product {
  sku: string;
  productDetails: ProductDetails;
}
