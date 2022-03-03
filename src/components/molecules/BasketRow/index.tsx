import { DeleteIcon } from "@chakra-ui/icons";
import { Box, GridItem, Grid, IconButton } from "@chakra-ui/react";
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

  const discount = useMemo(() => {
    return calculatePrice(basketItem);
  }, [qty]);

  return (
    <Box
      border={"1px solid"}
      borderRadius="4"
      borderColor="gray.300"
      padding={"4"}
      my={"4"}
      key={sku}
      data-testid={`basket-row-${sku}`}
    >
      <Grid templateColumns="repeat(5, 1fr)" gap={6}>
        <GridItem>
          <Box>Qty:</Box>
          {qty}
        </GridItem>
        <GridItem colSpan={2}>
          <Box>Name:</Box>
          {productDetails.name}{" "}
        </GridItem>
        <GridItem>
          <Box>Price:</Box>
          <Box data-testid={`product-price`}>{price}</Box>
        </GridItem>
        <GridItem textAlign={"right"}>
          <IconButton
            data-testid={`remove-basket-row-${sku}`}
            aria-label="remove from basket"
            onClick={() => removeFromBasket(sku)}
            icon={<DeleteIcon />}
          />
        </GridItem>
      </Grid>
    </Box>
  );
};
