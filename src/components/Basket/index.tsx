import { useBasketContext } from "../../contexts/basketContext";
import { BasketRow } from "../BasketRow";

export const Basket: React.FC<{}> = () => {
  const { basketItems, basketTotal } = useBasketContext();

  return (
    <div data-testid="basket">
      Basket
      {basketItems.map((product) => {
        return <BasketRow key={product.sku} {...product} />;
      })}
      Total: {basketTotal}
    </div>
  );
};
