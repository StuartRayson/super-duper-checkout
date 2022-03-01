import { ProductType } from "../../mockData/getMockProductListResponse";

import React, { createContext, useContext, useState, useMemo } from "react";
import { BasketItem } from "../../mockData/getMockBasketResponse";

export interface AppContextInterface {
  basketItems: BasketItem[];
  basketTotal: string;
  addToBasket: (product: ProductType) => void;
  removeFromBasket: (sku: string) => void;
}

const defaults: AppContextInterface = {
  basketItems: [],
  basketTotal: "",
  addToBasket: () => {
    return;
  },
  removeFromBasket: () => {
    return;
  },
};

export const BasketContext = createContext(defaults);

export const BasketContextProvider: React.FC<{}> = ({ children }) => {
  const [basketItems, setBasketItems] = useState(defaults.basketItems);

  /*
   * Add item to the basket context
   * if item is already added increase QTY
   */
  const addToBasket = () => {
    return;
  };

  /*
   * Remove item from the basket context
   * use the sku to remove the item
   */
  const removeFromBasket = (sku: string) => {
    return;
  };

  /*
   * useMemo to calculate Basket Total on BasketItem Change
   */
  const basketTotal = useMemo(() => {
    return "";
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
