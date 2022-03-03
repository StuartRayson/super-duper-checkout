import { Box, Divider, Heading, Center } from "@chakra-ui/react";
import { Basket } from "../../organisms/Basket";
import { ProductList } from "../../organisms/ProductList";

export function Checkout() {
  return (
    <Center>
      <Box maxWidth={`700px`}>
        <Basket />
        <Divider />
        <Box>
          <Center padding="4">
            <Heading>Our Popular Products</Heading>
          </Center>
          <Center>
            <ProductList />
          </Center>
        </Box>
      </Box>
    </Center>
  );
}
