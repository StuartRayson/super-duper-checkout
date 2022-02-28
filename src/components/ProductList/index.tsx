import { useEffect, useState } from "react";
import {
  productListResponse,
  ProductType,
} from "../../mockData/getProductListResponse";
import { Product } from "../Product";

export const ProductList: React.FC<{}> = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    async function fetchMyAPI() {
      try {
        const response = await productListResponse();
        setProducts(response);
      } catch {
        console.error("issue requesting product data");
      }
    }

    fetchMyAPI();
  }, []);

  return (
    <div data-testid="product-list">
      {products.length &&
        products.map((product) => (
          <Product key={product.sku} product={product} />
        ))}
    </div>
  );
};
