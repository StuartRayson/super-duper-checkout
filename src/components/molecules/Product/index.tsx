import { useBasketContext } from "../../../contexts/basketContext";
import { ProductType } from "../../../mockData/getMockProductListResponse";

export const Product: React.FC<ProductType> = (product) => {
  const { addToBasket } = useBasketContext();
  const { sku } = product;
  return (
    <div data-testid="product">
      {sku}
      <button
        data-testid={`add-to-basket-${sku}`}
        onClick={() => addToBasket(product)}
      >
        add
      </button>
    </div>
  );
};
