import { useMemo } from "react";
import { useBasketContext } from "../../../contexts/basketContext";
import { calculatePrice } from "../../../helpers/calculatePrice";
import { BasketItem } from "../../../mockData/getMockBasketResponse";

export const BasketRow: React.FC<BasketItem> = (basketItem) => {
  const { removeFromBasket } = useBasketContext();
  const { qty, sku, productDetails } = basketItem;

  const price = useMemo(() => {
    return calculatePrice(basketItem);
  }, [qty]);

  return (
    <div key={sku} data-testid={`basket-row-${sku}`}>
      qty: {qty} - {productDetails.name} - price:{" "}
      <div data-testid={`product-price`}>{price}</div>
      <button
        data-testid={`remove-basket-row-${sku}`}
        onClick={() => removeFromBasket(sku)}
      >
        {" "}
        remove{" "}
      </button>
    </div>
  );
};
