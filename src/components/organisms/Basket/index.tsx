import { Alert, AlertIcon, Box, Heading } from "@chakra-ui/react";
import { useBasketContext } from "../../../contexts/basketContext";
import { formatPrice } from "../../../helpers/formatPrice";
import { BasketRow } from "../../molecules/BasketRow";

export const Basket: React.FC<{}> = () => {
  const { basketItems, basketTotal } = useBasketContext();

  return (
    <Box marginY="8" marginX="4" data-testid="basket">
      <Heading as="h2" size="xl">
        Basket
      </Heading>
      {!basketItems.length && (
        <Alert status="info" marginY="4" borderRadius="4">
          <AlertIcon />
          There are no items in your basket
        </Alert>
      )}
      {basketItems.length > 0 && (
        <>
          {basketItems.map((product) => {
            return <BasketRow key={product.sku} {...product} />;
          })}

          <Box mt="4" textAlign="right">
            <Box as="span" fontWeight="bold">
              Total To Pay:
            </Box>{" "}
            {formatPrice(basketTotal)}
          </Box>
        </>
      )}
    </Box>
  );
};
