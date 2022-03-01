import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
} from "react";
import { calculatePrice } from "../../helpers/calculatePrice";

import { BasketItem } from "../../mockData/getMockBasketResponse";
import { ProductType } from "../../mockData/getMockProductListResponse";

export interface AppContextInterface {
  basketItems: BasketItem[];
  basketTotal: number;
  addToBasket: (product: ProductType) => void;
  removeFromBasket: (sku: string) => void;
}

const defaults: AppContextInterface = {
  basketItems: [],
  basketTotal: 0,
  addToBasket: () => {
    return;
  },
  removeFromBasket: () => {
    return;
  },
};

export const BasketContext = createContext(defaults);

const basketItemIndex = (basketArray: BasketItem[], sku: string) =>
  basketArray.findIndex((basketItem) => {
    return basketItem.sku === sku;
  });

export const BasketContextProvider: React.FC<{}> = ({ children }) => {
  const [basketItems, setBasketItems] = useState(defaults.basketItems);

  /*
   * Add item to the basket context
   * if item is already added increase QTY
   */
  const addToBasket = useCallback((product: ProductType) => {
    setBasketItems((currentBasketItems) => {
      const itemIndex = basketItemIndex(currentBasketItems, product.sku);
      const newItem = itemIndex === -1;
      const newBasketArray = [...currentBasketItems];

      const productWithQty = {
        ...product,
        qty: newItem ? 1 : currentBasketItems[itemIndex].qty + 1,
      };

      if (newItem) {
        return [...newBasketArray, productWithQty];
      }

      newBasketArray.splice(itemIndex, 1, productWithQty);

      return [...newBasketArray];
    });
  }, []);

  /*
   * Remove item from the basket context
   * use the sku to remove the item
   */
  const removeFromBasket = useCallback((sku: string) => {
    setBasketItems((currentBasketItems) => {
      const itemIndex = basketItemIndex(currentBasketItems, sku);
      const newBasketArray = [...currentBasketItems];
      if (itemIndex >= 0) {
        newBasketArray.splice(itemIndex, 1);
      }

      return [...newBasketArray];
    });
  }, []);

  /*
   * useMemo to calculate Basket Total on BasketItem Change
   */
  const basketTotal = useMemo(() => {
    let totalBasketValue = 0;

    basketItems.forEach((item) => {
      totalBasketValue += calculatePrice(item);
    });

    return totalBasketValue;
  }, [basketItems]);

  return (
    <BasketContext.Provider
      value={{
        basketItems,
        basketTotal,
        addToBasket,
        removeFromBasket,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};

export const useBasketContext = () => useContext(BasketContext);
