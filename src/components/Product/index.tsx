import { ProductType } from "../../mockData/getMockProductListResponse";

export const Product: React.FC<{
  product: ProductType;
}> = ({ product }) => {
  return <div data-testid="product">{product.sku}</div>;
};
