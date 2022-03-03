import { Box, HStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import {
  productListResponse,
  ProductType,
} from "../../../mockData/getMockProductListResponse";
import { Product } from "../../molecules/Product";

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
    <HStack data-testid="product-list">
      {products.length &&
        products.map((product) => (
          <Box key={product.sku} maxWidth={`50%`} padding={`4`}>
            <Product {...product} />
          </Box>
        ))}
    </HStack>
  );
};
