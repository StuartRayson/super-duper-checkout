import { useBasketContext } from "../../contexts/basketContext";
import { BasketItem } from "../../mockData/getMockBasketResponse";

const BasketRow: React.FC<BasketItem> = ({ sku, productDetails }) => {
  return (
    <div key={sku} data-testid={`product-${sku}`}>
      {productDetails.name}
    </div>
  );
};

export const Basket: React.FC<{}> = () => {
  const { basketItems } = useBasketContext();

  return (
    <div data-testid="basket">
      Basket
      {basketItems.map((product) => {
        return <BasketRow key={product.sku} {...product} />;
      })}
    </div>
  );
};
