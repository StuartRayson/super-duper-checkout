import { useBasketContext } from "../../contexts/basketContext";
import { ProductType } from "../../mockData/getMockProductListResponse";

export const Product: React.FC<{
  product: ProductType;
}> = ({ product }) => {
  const { addToBasket } = useBasketContext();
  return (
    <div data-testid="product">
      {product.sku}
      <button onClick={() => addToBasket(product)}>add</button>
    </div>
  );
};
