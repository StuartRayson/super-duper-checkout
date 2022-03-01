import { useEffect, useState } from "react";
import {
  productListResponse,
  ProductType,
} from "../../mockData/getMockProductListResponse";
import { Product } from "../Product";

export const ProductList: React.FC<{}> = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    async function fetchProductList() {
      try {
        const response = await productListResponse();
        setProducts(response);
      } catch {
        console.error("issue requesting product data");
      }
    }

    fetchProductList();
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
