import {
  Alert,
  AlertIcon,
  Box,
  Grid,
  GridItem,
  Heading,
} from "@chakra-ui/react";
import { useBasketContext } from "../../../contexts/basketContext";
import { BasketRow } from "../../molecules/BasketRow";

export const Basket: React.FC<{}> = () => {
  const { basketItems, basketTotal } = useBasketContext();

  return (
    <Box marginY="8" marginX="4" data-testid="basket">
      <Heading as="h2" size="xl">
        Basket
      </Heading>
      {basketItems.map((product) => {
        return <BasketRow key={product.sku} {...product} />;
      })}
      {!basketItems.length && (
        <Alert status="info" marginY={"4"}>
          <AlertIcon />
          Looks there is nothing in your Basket
        </Alert>
      )}
      <Box mt="4" textAlign="right">
        <Box as="span" fontWeight="bold">
          Total:
        </Box>{" "}
        {basketTotal}
      </Box>
    </Box>
  );
};
